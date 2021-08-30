#include "SocketServer.h"

SocketServer::SocketServer() {}

bool SocketServer::crear_socket() {
    //Crear a un descriptor
    descriptor = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if(descriptor < 0)//Validamos si se crea el socket
        return false;

    info.sin_family = AF_INET; //Tipo de conexion - ipv4
    info.sin_addr.s_addr = INADDR_ANY; //Aceptamos a cualquiera
    info.sin_port = htons(4050); //Definimos el puerto
    memset(&info.sin_zero, 0, sizeof(info.sin_zero)); //Limpiamos la estructura
    return true;
}

bool SocketServer::enlazar_kernel() {
    if((bind(descriptor, (sockaddr *)&info, (socklen_t)sizeof(info))) < 0)
        return false;
    //Escuchar a los clientes
    listen(descriptor, 4);
    return true;
}

void SocketServer::run() {
    if(!crear_socket())
        throw string("Hubo un error al crear el socket");
    if(!enlazar_kernel())
        throw string("Hubo un error al enlazar el Kernel");

    //Ciclo infinito para aceptar a los clientes
    while(true){
        dataSocket data;
        socklen_t t = sizeof(data.info);
        cout << "Esperando a que se conecte un cliente" << endl;
        data.descriptor = accept(descriptor, (sockaddr *)&data.info, &t);
        if(data.descriptor < 0){
            cout << "Error al aceptar el cliente" << endl;
            break;
        }
        else{
            clientes.push_back(data.descriptor);
            cout << "Cliente conectado" << endl;
            pthread_t hilo;
            pthread_create(&hilo, 0, SocketServer::ControladorCliente, (void *)&data);
            pthread_detach(hilo);
        }
    }
    close(descriptor);
}

void * SocketServer::ControladorCliente(void *obj) {
    dataSocket* data = (dataSocket *)obj;
    while(true){
        string mensaje;
        char buffer[1024] = {0};
        while(1){
            memset(buffer, 0, 1024);
            int bytes = recv(data->descriptor, buffer, 1024, 0);
            mensaje.append(buffer, bytes);
            if(bytes <= 0){
                close(data->descriptor);
                pthread_exit(NULL);
            }
            if(bytes < 1024){
                break;
            }
        }
        cout << mensaje << endl;
    }
    close(data->descriptor);
    pthread_exit(NULL);
}

void SocketServer::setMensaje(const char *msn) {
    for(int i = 0; i < clientes.size(); i++){
        send(clientes[i], msn, strlen(msn), 0);
    }
}



