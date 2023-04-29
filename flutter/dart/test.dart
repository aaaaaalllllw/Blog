// void main(List<String> args) {
//   print('hello world');
// }

//Functions
// int timesTwo(int x) {
//   return x * 2;
// }

// int timesFour(int x) => timesTwo(timesTwo(x));

// int runTwice(int x, int Function(int) f) {
//   for (var i = 0; i < 2; i++) {
//     x = f(x);
//   }
//   return x;
// }

// void main(List<String> args) {
//   print('4*2 ${timesTwo(4)}');
//   print('4 times four is ${timesFour(4)}');
//   print('2 x 2 x 2 is ${runTwice(2, timesTwo)}');
// }

// bool isEven(int x) {
//   // An if-else statement.
//   if (x % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// List<int> getEvenNumbers(Iterable<int> numbers) {
//   var evenNumbers = <int>[];

//   // A for-in loop.
//   for (var i in numbers) {
//     // A single line if statement.
//     if (isEven(i)) {
//       evenNumbers.add(i);
//     }
//   }

//   return evenNumbers;
// }

// void main() {
//   var numbers = List.generate(10, (i) => i);
//   print(getEvenNumbers(numbers));
// }

// import 'dart:math' as math;

// void main() {
//   print('a single quoted string');
//   print("a double quoted string");

//   // Strings can be combined by placing them adjacent to each other.
//   print('cat' 'dog');

//   // Triple quotes define a multi-line string.
//   print('''triple quoted strings
// are for multiple lines''');

//   // Dart supports string interpolation.
//   final pi = math.pi;
//   print('pi is $pi');
//   print('tau is ${2 * pi}');
// }

// A list literal.
// const lostNumbers = [4, 8, 15, 16, 23, 42];

// // A map literal.
// const nobleGases = {
//   'He': 'Helium',
//   'Ne': 'Neon',
//   'Ar': 'Argon',
// };

// // A set literal.
// const frogs = {
//   'Tree',
//   'Poison dart',
//   'Glass',
// };

// void main() {
//   print(lostNumbers.last);
//   print(nobleGases['Ne']);
//   print(frogs.difference({'Poison dart'}));
// }

// Abstract classes can't be instantiated.
abstract class Item {
  void use();
}

// Classes can implement other classes.
class Chest<T> implements Item {
  final List<T> contents;

  // Constructors can assign arguments to instance variables using `this`.
  Chest(this.contents);

  @override
  void use() => print('$this has ${contents.length} items.');
}

class Sword implements Item {
  int get damage => 5;

  @override
  void use() => print('$this dealt $damage damage.');
}

// Classes can extend other classes.
class DiamondSword extends Sword {
  @override
  final int damage = 50;
}

void main() {
  // The 'new' keyword is optional.
  var chest = Chest<Item>([
    DiamondSword(),
    Sword(),
  ]);

  chest.use();

  for (final item in chest.contents) {
    item.use();
  }
}
