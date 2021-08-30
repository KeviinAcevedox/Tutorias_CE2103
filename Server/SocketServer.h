
#ifndef SERVER_SOCKETSERVER_H
#define SERVER_SOCKETSERVER_H

#include <sys/socket.h>
#include <sys/types.h>
#include <netdb.h>
#include <string.h>
#include <string>
#include <iostream>
#include <pthread.h>
#include <vector>
#include <unistd.h>
using namespace std;

//Estructura para representar a los clientes
struct dataSocket{
    int descriptor;
    sockaddr_in info;
};

class SocketServer{
public:
    SocketServer();
    void run();
    void setMensaje(const char* msn);
private:
    int descriptor; //Identifica a los sistemas
    sockaddr_in info; //Informacion del socket servidor
    vector<int> clientes; //Almacena todos los clientes que se conecten

    bool crear_socket();
    bool enlazar_kernel();
    static void* ControladorCliente(void* obj);
};


#endif //SERVER_SOCKETSERVER_H
