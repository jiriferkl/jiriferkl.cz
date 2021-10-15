import './theme.scss'
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import { Dropdown } from 'bootstrap';
import {loadExperienceYears, loadAge, loadStars} from './data';

loadExperienceYears();
loadAge();
loadStars();
