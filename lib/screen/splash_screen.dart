import 'package:flutter/material.dart';
import 'package:institute_objectbox/screen/dashboard.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'login.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  static const String route = "splashScreen";

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  String data = '';
  @override
  void initState() {
    _getDataFromSharedPref();

    super.initState();
  }

  _getDataFromSharedPref() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    final String? value = prefs.getString('username');
    if (value != null) {
      setState(() {
        data = value;

      Navigator.pushReplacementNamed(context, DashboardScreen.route);

      });
    } else {
      setState(() {
        data = 'No data found';
            Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacementNamed(context, LoginScreen.route);
    }); 
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: Text(data),
          ),
          const SizedBox(height: 8),
          const Center(
            child: CircularProgressIndicator(),
          ),
          const SizedBox(height: 8),
          const Text(
            'v1.0.0',
            style: TextStyle(color: Colors.grey, fontSize: 18),
          ),
        ],
      ),
    );
  }
}
