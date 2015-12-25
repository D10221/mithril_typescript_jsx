import { ExampleView } from './view';
import { ExampleController } from './controller';
import  {ComponentFty } from '../../ComponentFty'

import MithrilController = _mithril.MithrilController;
import {View} from '../../interfaces';
import MithrilComponent = _mithril.MithrilComponent;

//
export var ExampleComponent = new ComponentFty(new ExampleController(), new ExampleView()).build();

//module.exports = {
//    controller: ()=> {
//        return new ExampleController();
//    },
//    view: new ExampleView().render
//}
