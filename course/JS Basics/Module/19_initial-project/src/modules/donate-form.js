import { settings as currency} from "../core/constants/settings"
class DonateForm {
    #form
    #totalAmount
    #input
    #title

    constructor(totalAmount,createNewDonate) {
        this.#totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    }

    render() {
        this.#form = document.createElement('form');
        this.#form.className = 'donate-form';

        const title = this.#renderTitle();
        const label = this.#renderLabel();
        const input = this.#renderInput();
        const btn = this.#renderBtn();

        this.#form.addEventListener('submit',(e) => {
            e.preventDefault();
            const donate = {
                date: new Date(),
                amount: Number(this.#input.value.trim()),
            };
            this.createNewDonate(donate);
            this.#input.value = '';
        });

        this.updateTotalAmount(this.#totalAmount);

        this.#form.append(title,label,input,btn);
        return this.#form;
    }

    updateTotalAmount(newAmount) {
        this.#title.innerHTML = `<b>${newAmount}${currency.currency}</b>`;
    }

    #renderInput(){
        this.#input = document.createElement('input');
        this.#input.className = 'donate-form__donate-input';
        this.#input.name = 'amount';
        this.#input.type= 'number';
        this.#input.setAttribute('required', '');
        this.#input.max =100;
        this.#input.min = 1;
        return this.#input;
    }

    #renderLabel () {
        const label = document.createElement('label');
        label.className = 'donate-form__input-label';
        label.textContent = `Введите сумму в ${currency.currency}`;
        return label;
    }

    #renderTitle(){
        this.#title = document.createElement('h1');
        this.#title.textContent = this.#totalAmount;
        this.#title.id = 'total-amount';
        return this.#title;
    }

    #renderBtn(){
        const btn = document.createElement('button');
        btn.className = 'donate-form__submit-button';
        btn.type = 'submit';
        btn.textContent = 'Задонатить';
        return btn;
    }
}
export {
    DonateForm,
}