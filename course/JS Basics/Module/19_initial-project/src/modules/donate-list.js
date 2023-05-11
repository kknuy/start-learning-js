import { settings as currency } from "../core/constants/settings";
import * as Utils from "../core/utils";

class DonateList {
    #donates
    #container
    #donatesContainer
    constructor(donates){
        this.#donates = donates;
    }
    render(){
        this.#container = document.createElement('div');
        this.#container.className = 'donates-container';

        const title = document.createElement('h2');
        title.className = 'donates-container__title';
        title.textContent = 'Список донатов';

        this.#donatesContainer = document.createElement('div');
        this.#donatesContainer.className = 'donates-container__donates';

        this.#container.append(title,this.#donatesContainer);

        this.#renderDonates(this.#donatesContainer);
        return this.#container;
    }

    #renderDonates(container) {
        this.#donatesContainer.innerHTML = '';
        this.#donates.forEach((donateItem) => {
            const donateItemHTML = document.createElement('div');
            donateItemHTML.className = 'donate-item';
            const creationTime = Utils.getFormattedTime(donateItem.date);
            donateItemHTML.innerHTML = `${creationTime} - <b>${donateItem.amount}${currency.currency}</b>`;
            container.append(donateItemHTML);
        });
    }

    updateDonates(updatedDonates) {
        this.#donates = updatedDonates;
        this.#renderDonates(this.#donatesContainer);
    }
}

export {
    DonateList,
}