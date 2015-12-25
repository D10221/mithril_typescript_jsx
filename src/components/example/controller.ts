import MithrilProperty = _mithril.MithrilProperty;
import MithrilController = _mithril.MithrilController;
import MithrilStatic = _mithril.MithrilStatic;
import requireIt from "../../requireit";
var m = requireIt<MithrilStatic>('mithril');

export class ExampleController implements MithrilController{
    inputValue: MithrilProperty<string> = m.prop('Hola!');
    constructor(){

    }
}
