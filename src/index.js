import _ from 'lodash';
import "./style.scss";
import Icon from './assets/pic.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());