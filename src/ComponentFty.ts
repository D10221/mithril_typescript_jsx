import MithrilController = _mithril.MithrilController;
import MithrilComponent = _mithril.MithrilComponent;
import {View} from "./interfaces";

export class ComponentFty {

    private _controller : MithrilController;
    private _view : View<MithrilController>;


    constructor(controller:MithrilController, view :View<MithrilController>){
        this._controller = controller;
        this._view = view;
    }

    build(): MithrilComponent<MithrilController>{
        return {
            controller: ()=> this._controller,
            view: this._view.render
        };
    }
}