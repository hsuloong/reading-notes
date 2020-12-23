### Hello, world of concurrency in C++

`C++11`标准引入了多线程的支持(`std::thread`等其他并发相关的库)；

#### 什么是`Concurrency`：多个独立的活动同时进行；

计算机中的`Concurrency`：一台计算机同时进行着多个相互独立的应用；


中文里的并发：多个任务看似在同时跑，实际是不停的在切换  
中文里的并行：多个任务真的在同时跑


Concurrency实现方式
```
(1)多线程：内存地址空间共享
(2)多进程：内存地址空间独立互不干扰
```

#### 为啥使用Concurrency：[separation of concerns] & [performance]


separation of concerns：分离独立的逻辑，使得程序易于实现、理解和测试

performance：单任务分解成多个部分并行计算；已有的并行方法解决更大的问题

#### 啥时候不该使用Concurrency：好处小于代价 👀

并发代码难以理解：复杂和难以理解使得Bug更多

业务时间启动/切换进程/线程的时间

过多的线程：线程有一些私有栈，大量消耗进程地址空间【PS：线程池，但不是银弹】

如果每个线程有一个网络连接：大量连接耗尽系统资源


#### C++ Concurrency：多线程





