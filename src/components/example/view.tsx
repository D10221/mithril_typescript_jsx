import MithrilVirtualElement = _mithril.MithrilVirtualElement;
import {View} from "../../interfaces";
import {ExampleController} from "./controller";
import requireIt from '../../requireit';

export class ExampleView implements View<ExampleController>{

     render(ctrl:ExampleController):MithrilVirtualElement {
        return <div>
            <input value={ctrl.inputValue()} onChange={ctrl.inputValue}/>
        </div>;
    }
}


