import MithrilVirtualElement = _mithril.MithrilVirtualElement;
import MithrilController = _mithril.MithrilController;
export interface View<T extends MithrilController>{
    render(ctrl:MithrilController):MithrilVirtualElement;
}