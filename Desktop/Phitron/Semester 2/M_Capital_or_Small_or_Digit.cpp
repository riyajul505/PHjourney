#include <bits/stdc++.h>
using namespace std;

int main() {

   

   char character;
   cin>> character;
   
   if((int)character>=48 && (int)character<=57){
        cout<<"IS DIGIT";
   }
   else if((int)character>=65 && (int)character<=90){
    cout<<"ALPHA"<<endl;
    cout<<"IS CAPITAL";
    
   }
   else if((int)character>=97 && (int)character<=122){
    cout<<"ALPHA"<<endl;
    cout<<"IS SMALL";
   }


   return 0; 
}