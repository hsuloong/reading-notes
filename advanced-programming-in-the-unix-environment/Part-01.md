### Unix基础知识

#### 登录
登陆相关文件：/etc/passwd
```
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
```
分别为登录名、密码、用户ID、组ID、用户信息、Home目录、默认Shell程序

#### 文件和目录

UNIX文件起于根目录：'/'

文件描述符：Shell默认打开3个文件描述符【标准输入0，标准输出1，标准错误2，Linux定义在`unisted.h`中】

#### 程序和进程

Unix进程控制函数：fork、exec、waitpid

线程ID只在所属的进程内起作用

#### 出错处理

大部分系统调用函数发生错误会设置`errno`这个变量：如果没有出错，该值不会被清除；任何函数都不会将`errno`值设为0

`errno`处理函数：`strerror`返回出错字符串；`perror`基于当前`errno`的值打印错误信息并退出

#### 用户标识

用户ID：数值，0为root

组ID：组文件`/etc/group`，可用于组成员资源共享

#### 信号

进程处理信号：忽略；默认处理；提供处理函数【通过`signal`】

#### 时间

时间：日历时间，从`UTC 1970-01-01 00:00:00`，以`time_t`保存；进程时间，以时钟滴答计算，以`clock_t`保存。



