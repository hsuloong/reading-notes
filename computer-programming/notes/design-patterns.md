#### 设计模式

对于设计模式的定义，可以参考维基百科或者任意一本讲述设计模式相关的书籍，以下摘抄[英文维基](https://en.wikipedia.org/wiki/Software_design_pattern)的一段说明：

> In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

按照上面的说法，设计模式就是一个解决不同软件问题的套路集合，正如写小说是有套路的（这里不得不提漫威电影宇宙，那叫一个套路）。解决软件问题有很多种套路，但是设计模式应该最广泛的软件开发套路了。

关于设计模式具体有哪些可以参考上面的维基百科，本文基于作者的工程经验以及学习经历，分别记录总结各种设计模式，如有错漏欢迎指出。

PS：作者主力编程语言是C++，下面示例代码也是以C++为主。

#### 状态模式

状态模式：面向对象程序设计中，一个对象的行为会随着状态发生变化而相应变化。

工程上有处理过`单据`的同学对`状态`这个名词绝对不陌生，无论是电商行业的`订单`还是ERP系统的`审批单`之类的名字带有`单`字的实体，他们大部分有一个字段来标记`单据`所处的`状态`，而单据状态不同也意味着单据能够进行的下一步操作是不同的。

比如电商行业的订单如果处于`已支付`状态时，那么这个订单肯定是不允许再次付款的。对于状态比较少的情况，大部分工程实践可以采用`if else`语句来实现状态与行为的控制。大致伪代码可能如下：

```cpp
class Order {
public:
    Order(const OrderPo &order_po);

public:
    int Pay(const PayVo& pay_vo) {
        if (order_state != xxx && ...) {
            return Error...;
        }
        // Do Pay Logic
    }
};
```

如果状态比较少且变化不频繁的情况下，用类似上面的代码来管理状态机我个人认为是OK的，而且代码也相对使用状态模式的代码简单易读一些。

但是如果状态机包含的状态数量非常多，或者状态机经常发生变化，那么使用上面的`if else`方式将会导致维护状态机的工作量急剧上升，而且由于维护人本身的疏忽也容易引入Bug。

比如上面新增一个状态后，需要记得修改所有和状态有关的判断语句，否则就容易导致Bug的产生。

关于如何编写状态模式代码，只需记住以下一张图（来自于维基百科）：

![](./images/state-design-pattern-uml-class-diagram.svg.png)

上图有2种类：

- State基类及其派生的子类

    状态相关类，基类中定义所有的业务逻辑抽象接口，子类根据自己所代表的状态分别继承实现相应的抽象接口。比如支付订单的`已支付`状态子类可能只需要实现退款等`已支付`状态能够进行的业务操作，其他所有不允许的操作将会直接抛出异常（也有可能是其他返回形式，只要能明确告知外部该状态下不允许进行某个操作）。

- Context类

    该类的会将`State`的实例定义成自己的成员变量，并对外暴露`State基类`中定义的接口，对Context类的接口调用将会委托给`State`成员变量。

把上图翻译成对应的伪代码如下：

```cpp
/*=====================State基类及其派生的子类=====================*/
class State { // 基类所有接口都是直接抛出异常
public:

    virtual ~State() {}

public:
  virtual void DoSomething(Context &context) { throw "State Error"; }

  virtual void DoOtherThing(Context &context) { throw "State Error"; }
}

class ConcreteStateA : public State {
public:
    virtual void DoSomething(Context &context) override { 
        /*Actual DoSomething*/;
        context.SetState(next_state); // Change to Next State if DoSomething Success
    }
};

class ConcreteStateB : public State {
public:
    virtual void DoOtherThing(Context &context) override {
        /*Actual DoOtherThing*/;
        context.SetState(next_state); // Change to Next State if DoOtherThing Success
    }
};


/*========================Context类========================*/
class Context { // 在这里面定义业务逻辑函数供外部调用，实际委托给状态成员变量完成具体的业务
public:
    Context() { state = Instance of Initial State;}

public:
    void DoSomething() { return this->state_->DoSomething(this); }

    void DoOtherThing() { return this->state_->DoOtherThing(this); }

public:
    void SetState(State *next_state) {this->state_ = next_state;}

private:
    State *state_;
};
```

总结状态模式的代码结构：有多少个状态就有多少个状态子类，子类实现该状态下允许的业务操作，未实现的业务操作代表该状态下的非法操作。每个状态子类在做完自己的业务逻辑后，接着根据状态转移关系，修改`Context`类的状态成员变量`State *state_`为下一个状态，也就是借助于`多态技术`便可以让行为跟着状态发生变化。

至此状态模式所有相关知识都介绍完毕了，如果你认为接下来就是根据自己的业务状态来手撸状态模式代码，那么我只能祝你好运了。

实际上，我强烈反对手撸状态模式代码，手撸出来的代码维护难度我个人觉得比`if else`的代码还要高，如果你决定手撸，我只能说你是勇士了。

既然不要手撸状态模式代码，那么就要请出我们的大杀器：[SMC: State Machine Compiler](http://smc.sourceforge.net/)

状态机编译器，如其名，和gcc等编译器一样，就是将一种语言翻译成另外一种语言。而状态机编译器便是将状态机定义语言翻译成C/C++、Java等高级编程语言所实现的状态模式代码。

在继续阅读下面的文字之前，强烈建议打开上面的链接自己先熟悉下SMC相关概念。[请一定要看完这个链接的内容](http://smc.sourceforge.net/)，或者至少要把[这个PPT](http://smc.sourceforge.net/slides/SMC_Tutorial.pdf)看完。

希望你看完了，接下来我们来学习如果用`SMC`来管理我们的状态机。

首先复习一下刚才链接里面的一些基本概念：

