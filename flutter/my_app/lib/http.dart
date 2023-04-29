import 'dart:convert';

import 'package:http/http.dart';

Future _getByHttp() async {
  //接口地址
  const url = "https://www.demo.com/api"; //获取接口的返回值
  final response = await http.get(url);
  //接口的值返回转化为JSON
  var json = jsonDecode(response.body);
  return json;
}
