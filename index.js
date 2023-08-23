const listObj = [
	{ id: 1, upperText: "import Files", bottomText: "Browse and upload" },
	{ id: 2, upperText: "Data Mapping", bottomText: "Select and map it" },
	{ id: 3, upperText: "Entity Mapping", bottomText: "Chose the name" },
	{ id: 4, upperText: "Summary", bottomText: "Review and confirm" },
];
const stepsObj = [
	{
		title: "Entity Mapping 1",
		inputs: [
			{
				label: "Select Name 1",
				type: 2,
				options: [
					{ value: 1, name: "Name 1" },
					{ value: 2, name: "Name 2" },
					{ value: 3, name: "Name 3" },
					{ value: 4, name: "Name 4" },
				],
			},
			{
				label: "Grade",
				type: 2,
				options: [
					{ value: 1, name: "Grade 1" },
					{ value: 2, name: "Grade 2" },
					{ value: 3, name: "Grade 3" },
					{ value: 4, name: "Grade 4" },
				],
			},
			{
				label: "Email",
				type: 2,
				options: [
					{ value: 1, name: "Email 1" },
					{ value: 2, name: "Email 2" },
					{ value: 3, name: "Email 3" },
					{ value: 4, name: "Email 4" },
				],
			},
			{
				label: "Section",
				type: 2,
				options: [
					{ value: 1, name: "Section 1" },
					{ value: 2, name: "Section 2" },
					{ value: 3, name: "Section 3" },
					{ value: 4, name: "Section 4" },
				],
			},
		],
	},
	{
		title: "Entity Mapping 2",
		type: 2,
		inputs: [
			{
				label: "Select Name 2",
				type: 4,
				options: [
					{ value: 1, name: "Name 1" },
					{ value: 2, name: "Name 2" },
					{ value: 3, name: "Name 3" },
					{ value: 4, name: "Name 4" },
				],
			},
			{
				label: "Grade 2",
				type: 2,
				options: [
					{ value: 1, name: "Grade 1" },
					{ value: 2, name: "Grade 2" },
					{ value: 3, name: "Grade 3" },
					{ value: 4, name: "Grade 4" },
				],
			},
			{
				label: "Email 2",
				type: 2,
				options: [
					{ value: 1, name: "Email 1" },
					{ value: 2, name: "Email 2" },
					{ value: 3, name: "Email 3" },
					{ value: 4, name: "Email 4" },
				],
			},
			{
				label: "Section 2",
				type: 2,
				options: [
					{ value: 1, name: "Section 1" },
					{ value: 2, name: "Section 2" },
					{ value: 3, name: "Section 3" },
					{ value: 4, name: "Section 4" },
				],
			},
		],
	},
	{
		title: "Entity Mapping 3",
		inputs: [
			{
				label: "Select Name 3",
				type: 2,
				options: [
					{ value: 1, name: "Name 1" },
					{ value: 2, name: "Name 2" },
					{ value: 3, name: "Name 3" },
					{ value: 4, name: "Name 4" },
				],
			},
			{
				label: "Grade 3",
				type: 2,
				options: [
					{ value: 1, name: "Grade 1" },
					{ value: 2, name: "Grade 2" },
					{ value: 3, name: "Grade 3" },
					{ value: 4, name: "Grade 4" },
				],
			},
			{
				label: "Email 3",
				type: 2,
				options: [
					{ value: 1, name: "Email 1" },
					{ value: 2, name: "Email 2" },
					{ value: 3, name: "Email 3" },
					{ value: 4, name: "Email 4" },
				],
			},
			{
				label: "Section 3",
				type: 2,
				options: [
					{ value: 1, name: "Section 1" },
					{ value: 2, name: "Section 2" },
					{ value: 3, name: "Section 3" },
					{ value: 4, name: "Section 4" },
				],
			},
		],
	},
	{
		title: "Entity Mapping 4",
		inputs: [
			{
				label: "Select Name 4",
				type: 2,
				options: [
					{ value: 1, name: "Name 1" },
					{ value: 2, name: "Name 2" },
					{ value: 3, name: "Name 3" },
					{ value: 4, name: "Name 4" },
				],
			},
			{
				label: "Grade 4",
				type: 2,
				options: [
					{ value: 1, name: "Grade 1" },
					{ value: 2, name: "Grade 2" },
					{ value: 3, name: "Grade 3" },
					{ value: 4, name: "Grade 4" },
				],
			},
			{
				label: "Email 4",
				type: 2,
				options: [
					{ value: 1, name: "Email 1" },
					{ value: 2, name: "Email 2" },
					{ value: 3, name: "Email 3" },
					{ value: 4, name: "Email 4" },
				],
			},
			{
				label: "Section 4",
				type: 2,
				options: [
					{ value: 1, name: "Section 1" },
					{ value: 2, name: "Section 2" },
					{ value: 3, name: "Section 3" },
					{ value: 4, name: "Section 4" },
				],
			},
		],
	},
];

const wizardIndicatorElement = document.querySelector(".midSection > .wizardIndicator > .list");
const wizardIndicatorItemElements = document.querySelector(".midSection > .wizardIndicator > .list .listItem");
const wizardContentElement = document.querySelector(".midSection > .wizardContent");
const buttonElements = document.querySelectorAll(".content > .bottomSection > .btns-wrapper button");
const ContentElement = document.querySelectorAll(".content > .bottomSection > .btns-wrapper button");

let wizardCount = 0;
let errArr = [];
let allValues = {};
(function renderListItem() {
	listObj.map((item, index) => {
		wizardIndicatorElement.insertAdjacentHTML(
			"beforeend",
			`
            <div class="listItem ${!index && "currentStep"}">
				<div class="textWrapper">
					<h5>${item.upperText}</h5>
					<p>${item.bottomText}</p>
				</div>
                

                <div class="icon">
                <p>${index + 1}</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 89.357 7.284 c -1.02 -1.297 -2.9 -1.552 -4.216 -0.557 C 73.3 15.685 62.228 25.68 52.018 36.561 c -5.44 5.811 -10.63 11.885 -15.478 18.289 c -2.576 3.427 -5.054 6.948 -7.396 10.6 h -0.148 L 15.315 38.08 c -0.132 -0.262 -0.282 -0.527 -0.445 -0.779 c -2.522 -3.903 -7.817 -4.933 -11.632 -2.175 c -3.577 2.586 -4.206 7.702 -1.811 11.41 l 22.147 34.278 l 0.271 0.421 c 0.783 1.216 2.034 2.156 3.635 2.516 c 2.745 0.617 5.472 -1.02 6.608 -3.595 c 2.922 -6.621 6.702 -13.106 10.829 -19.367 c 4.206 -6.345 8.816 -12.484 13.706 -18.41 c 9.183 -11.104 19.331 -21.496 30.315 -30.939 C 90.168 10.382 90.358 8.558 89.357 7.284 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #81b256; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>
                </div>
			</div>
            `
		);
	});
})();

const prevHandler = () => {
	if (wizardCount !== 0) {
		wizardCount--;

		ChangeWizardHandler();
		changeIndicatorHandler(wizardCount + 1);
		wizardCount === listObj.length - 2 && changeButtons(false);
	}
};

const changeButtons = (isLastStep) => {
	if (isLastStep) {
		buttonElements[1].innerHTML = "Save";
		buttonElements[0].innerHTML = "Cancel";
	} else {
		buttonElements[0].innerHTML = "Prev";
		buttonElements[1].innerHTML = "Next";
	}
};

const validationInputs = () => {
	errArr = [];
	return stepsObj[wizardCount].inputs.map((inputItem, index) => {
		formInput = document.querySelector(`#${inputItem.label.toLowerCase().replaceAll(" ", "_")}`).value;
		let inputLabel = inputItem.label.toLowerCase().replaceAll(" ", "_");
		if (formInput === "") {
			errArr.push(index);
			allValues[inputLabel] = formInput;
		} else {
			allValues[inputLabel] = formInput;
		}
		return errArr;
	});
};

const renderInput = (inputValues) => {
	switch (inputValues.type) {
		case 2:
			return `<div>
            <div class="errorNotification">You must fill this input.</div>
            <label for="${inputValues.label.toLowerCase().replaceAll(" ", "_")}">${inputValues.label}</label>
            <select name="${inputValues.label.toLowerCase().replaceAll(" ", "_")}" id="${inputValues.label.toLowerCase().replaceAll(" ", "_")}" >
            <option value="" selected disabled hidden >Please Select</option>
                ${inputValues.options
									.map((option) => {
										return `<option value=${option.value}>${option.name}</option>`;
									})
									.join("")}
            </select>
        </div>`;
		case 4:
			return `<div class="dateInput">
            <label for="${inputValues.label.toLowerCase().replaceAll(" ", "_")}">${inputValues.label}</label>
            <input type="date" name="${inputValues.label.toLowerCase().replaceAll(" ", "_")}" id="${inputValues.label.toLowerCase().replaceAll(" ", "_")}"
       value=${new Date().toISOString().substring(0, 10)}>
        </div>`;

		default:
			break;
	}
};
const ChangeWizardHandler = () => {
	let stepItem = stepsObj[wizardCount];

	wizardContentElement.innerHTML = `
        <div class="stepInputWrapper">
    <div class="top"><h4>${stepItem.title}</h4></div>
    <div class="content">
   ${stepItem.inputs
			.map((inputValues) => {
				return renderInput(inputValues);
			})
			.join("")}
        
    </div>
</div>`;
};

const validationNotificationRender = () => {
	const inputElements = document.querySelectorAll(".wizardContent .content")[0].children;
	Array.from(inputElements).forEach((inputElement, ind) => {
		// stepsObj[wizardCount].inputs
		if (errArr.includes(ind)) {
			inputElement?.querySelector(".errorNotification")?.classList.add("visibleNotification");
		} else {
			inputElement?.querySelector(".errorNotification")?.classList.remove("visibleNotification");

			// allValues[inputElement.]
		}
	});
};

const nextHandler = () => {
	validationInputs();
	if (errArr.length === 0) {
		if (wizardCount !== listObj.length - 1) {
			wizardCount++;
			ChangeWizardHandler();
			changeIndicatorHandler(wizardCount - 1);
			wizardCount === listObj.length - 1 && changeButtons(true);
		} else {
			console.log("Save Success!");
		}
	} else {
		validationNotificationRender();
	}
	console.log(allValues);
	errArr = [];
};

const changeIndicatorHandler = (prevCount) => {
	let wizardIndicatorItemElements = document.querySelectorAll(".midSection > .wizardIndicator > .list .listItem");
	if (wizardCount < prevCount) {
		wizardIndicatorItemElements[wizardCount].classList.remove("selected");
	} else {
		wizardIndicatorItemElements[prevCount].classList.add("selected");
	}
	wizardIndicatorItemElements[wizardCount].classList.add("currentStep");
	wizardIndicatorItemElements[prevCount].classList.remove("currentStep");
};
ChangeWizardHandler();
buttonElements[0].addEventListener("click", prevHandler);
buttonElements[1].addEventListener("click", nextHandler);
