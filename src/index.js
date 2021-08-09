import _ from 'lodash';
import "./style.scss";
import mainImage from 'assets/pic.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script

    const myImage = new Image();
    myImage.src = mainImage;

    element.appendChild(myImage);
  
    return element;
  }
  
  document.body.appendChild(component());