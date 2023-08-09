export type servertype = {id: number | null, name: string| null, status: string| null};


export class ServersService {
  private servers : {
            id : number | null, 
            name : string | null, 
            status : string | null}[] 
      = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number)  {
    //console.log('id',id);
    const server : servertype = 
                this.servers.filter(s => (s.id === id))[0];
    return server;
  }

  updateServer(id: number | null, serverInfo: {name: string | null, status: string | null}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
