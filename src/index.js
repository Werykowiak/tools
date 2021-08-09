import _ from 'lodash';
import "./style.scss";
import mainImage from 'assets/pic.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script

    const mainImage = new Image();
    mainImage.src = Icon;

    element.appendChild(mainImage);
  
    return element;
  }
  
  document.body.appendChild(component());