"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GlobalMethods {
    constructor() {
        this.selectValueByVisibleText = function (countryListElements, elementToBeSelect) {
            return __awaiter(this, void 0, void 0, function* () {
                let matchedElement;
                return yield countryListElements.filter((element) => __awaiter(this, void 0, void 0, function* () {
                    const text = yield element.getAttribute('innerText');
                    if (text.trim() === elementToBeSelect) {
                        matchedElement = element;
                        return matchedElement;
                    }
                })).first();
            });
        };
    }
}
exports.GlobalMethods = GlobalMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsTWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvZ2xvYmFsTWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQWEsYUFBYTtJQUl0QjtRQUdBLDZCQUF3QixHQUFJLFVBQWUsbUJBQXNDLEVBQUUsaUJBQXdCOztnQkFFaEcsSUFBSSxjQUE4QixDQUFFO2dCQUNwQyxPQUFPLE1BQU0sbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQU8sT0FBTyxFQUFDLEVBQUU7b0JBQzVDLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssaUJBQWlCLEVBQUU7d0JBQ25DLGNBQWMsR0FBRyxPQUFPLENBQUM7d0JBQ3pCLE9BQU8sY0FBYyxDQUFDO3FCQUN6QjtnQkFDVCxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQztTQUFBLENBQUE7SUFaYixDQUFDO0NBY0o7QUFuQkQsc0NBbUJDIn0=