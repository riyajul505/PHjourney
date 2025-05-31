#include <bits/stdc++.h>
using namespace std;

int main() {

   

    char str[100000];

    while (cin.getline(str, 100000))
    {
        int str_len = strlen(str);

        sort(str, str+str_len);


        for(int i = 0 ; i < str_len; i++){
            if(str[i] != ' '){
                cout << str[i];
            }
        }

        cout << endl;
    }

   
    

   return 0; 
}