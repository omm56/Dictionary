import { DefineService } from './define.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dictionary';
  word = "";
  Definition: object | any;
  meaning: object | any;
  partOfSpeech : object | any;
  

  constructor(private http: DefineService) { }

  ngOnInit(): void { }

  searchForWord() {
    this.http.getApi(this.word).subscribe(data => {
      this.Definition = data;
      // console.log(this.Definition);
      // this.meaning = this.Definition[0].meanings[0].definitions[0].definition;
      // this.partOfSpeech = this.Definition[0].meanings[0].partOfSpeech;
      
    
      // console.log("Definition:", this.Definition[0].meanings[0].partOfSpeech);
    });

  }
}
