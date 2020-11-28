/* @injectable({
    provideIn: 'root'
}) 

export class ServiceformService{
    
    URL = 'http://localhost/API/' ;

    constructor(private http: Httpclient){}

    listarRoadmaps() {
        return this.http.get('${this.URL}listarRoadmaps.php');
        
    }

    
}





*/