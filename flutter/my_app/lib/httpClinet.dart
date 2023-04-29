import 'dart:convert';
import 'dart:io';

Future _getByHttpClient() async {
  //接口地址
  const url = "https://www.demo.com/api";

  //定义request
  HttpClient client = HttpClient();
  //定义request
  HttpClientRequest request = await client.getUrl(Uri.parse(url));
  //定义Response
  HttpClientResponse response = await request.close();

  //respinse返回的数据，是字符串
  String responseBody = await response.transform(utf8.decoder).join();

  //关闭httpCLinet
  client.close();
  var json = jsonDecode(responseBody);
  return json;
}
