# Widgets 介绍


Flutter从React获取灵感，核心思想是用widget来构建UI界面。
Widgets描述当前的配置和状态下视图所应该呈现的样子。当widget的状态改变时，
它会重新构建其描述(展示的UI)，框架则会对比前后变化的不同，以确定底层渲染树从一个状态转换到下一个状态所需的最小更改。

创建一个最小的Flutter应用简单到进需要runApp()方法并传入widget即可:

```dart
import 'package:flutter/material.dart'

void main(){
    runApp(
        const Center(
            child:Text(
                'Hello，world！',
                textDirection: TextDirection.ltr,
            )
        )
    )
}
```
runApp()函数会将持有传入的widget，并且使成为widget树中的根节点。在这个例子，
widget树两个widgets，Center widget及其子widget--Text widget。框架会强制让跟widget
铺满整个屏幕，也就是“Hello World”会在屏幕居中显示


请确认在pubsepc.yaml文件中flutter部分，为了使用预置的Mater icons
```yml
name: my_app
flutter:
  uses-material-design: true

```



``` dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      title: 'Flutter Tutorial',
      home: TutorialHome(),
    ),
  );
}

class TutorialHome extends StatelessWidget {
  const TutorialHome({super.key});

  @override
  Widget build(BuildContext context) {
    // Scaffold is a layout for
    // the major Material Components.
    return Scaffold(
      appBar: AppBar(
        leading: const IconButton(
          icon: Icon(Icons.menu),
          tooltip: 'Navigation menu',
          onPressed: null,
        ),
        title: const Text('Example title'),
        actions: const [
          IconButton(
            icon: Icon(Icons.search),
            tooltip: 'Search',
            onPressed: null,
          ),
        ],
      ),
      // body is the majority of the screen.
      body: const Center(
        child: Text('Hello, world!'),
      ),
      floatingActionButton: const FloatingActionButton(
        tooltip: 'Add', // used by assistive technologies
        onPressed: null,
        child: Icon(Icons.add),
      ),
    );
  }
}

```

使用Widget.build主要是bar，boady，floatButton


# 处理手势

大多数应用都需要通过系统来处理一些用户交互。构建交互式应用程序的第一步是检测输入手势，这里通过创建一个简单的按钮来了解其工作原理：

```dart
import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  const MyButton({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        print('MyButton was tapped!');
      },
      child: Container(
        height: 50.0,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(5.0),
          color: Colors.lightGreen[500],
        ),
        child: const Center(
          child: Text('Engage'),
        ),
      ),
    );
  }
}

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: MyButton(),
        ),
      ),
    ),
  );
}

```


flutter手势


# 根据用户输入改变widget


无状态的widget。无状态widget接收的参数来自于它的父widget，他们储存
final成员变量。当widget需要被build()时，就是用这些存储变量为创建widget
生成新的参数

stateful是一种特殊的widget，它会生成state对象。


```dart
import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  const MyButton({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        print('MyButton was tapped!');
      },
      child: Container(
        height: 50.0,
        padding: const EdgeInsets.all(8.0),
        margin: const EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(5.0),
          color: Colors.lightGreen[500],
        ),
        child: const Center(
          child: Text('Engage'),
        ),
      ),
    );
  }
}

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: MyButton(),
        ),
      ),
    ),
  );
}


```






























