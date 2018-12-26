import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from 'src/service/file-uploader.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers:[FileUploaderService]
})
export class PhotoComponent implements OnInit {
fileupload:File=null ;
imageUrl: string="/assets/Images/logo1.png";
  constructor(private imageService:FileUploaderService) { 

  }
 
  ngOnInit() {
  }
  handleFileinput(file:FileList){
    this.fileupload=file.item(0);
    var reader= new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl= event.target.result;
    }
    reader.readAsDataURL(this.fileupload);
  }
OnSubmit(Image){
this.imageService.uploadUserPic(this.fileupload).subscribe(
  data =>{
    console.log('done');
    Image.value = null ;
    this.imageUrl="/assets/Images/logo1.png";
  }
)
}


}
