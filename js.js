var App = {
    init: function () {
        console.log("Inicio do App");

        //context, contexto, this, self
        this.elements.createElements();
        console.log("init", this);
        this.controlers.renderAllCards();


        console.log("Fim do App");
    },
    store: {
        state: {
            search: "",
            cards: cards,
            isDropDownOpen: false,
        }
    },
    controlers: {

        toggleDropDown: function () {
            if (App.store.state.isDropDownOpen) {
                App.store.state.isDropDownOpen = false;
            }
            else {
                App.store.state.isDropDownOpen = true;
            }
        },

        refreshNumber: function (n) {
            App.elements.number = App.elements.number - parseInt(n);
            App.elements.createRandomNumber();
        },


        renderMarketCards: function () {
            var search = App.store.state.search;

            while (App.elements.marketContainer.firstChild) {
                App.elements.marketContainer.removeChild(App.elements.marketContainer.firstChild);
            }

            for (var i = 1; i < App.elements.cards.length; i++) {
                var card = App.elements.cards[i];
                var c = App.elements.cards[i].childNodes;
                if (c[0].textContent.toLowerCase().search(search) === -1) {
                    continue;
                }
                App.elements.marketContainer.appendChild(card);




                card.onclick = function (e) {
                    console.log("esta carta foi adiconada ao market com sucesso!!!");
                    App.elements.yourCardsArray.push(e.target);
                    var clickId = App.elements.cards.indexOf(e.target);


                    console.log("index of........." + indexOf(e.target));

                    var x = App.elements.cards[App.elements.cards.indexOf(e.target)].childNodes
                    App.controlers.refreshNumber(x[6].textContent);

                    App.elements.cards.splice(clickId, 1);
                    e.target.remove();
                    App.controlers.renderYourCards();
                }

            }



        },

        renderYourCards: function () {

            var search = App.store.state.search;

            while (App.elements.yourCardsContainer.firstChild) {
                App.elements.yourCardsContainer.removeChild(App.elements.yourCardsContainer.firstChild);
            }

            for (var i = 0; i < App.elements.yourCardsArray.length; i++) {

                var card = App.elements.yourCardsArray[i];

                var y = App.elements.yourCardsArray[i].childNodes;
                if (y[0].textContent.toLowerCase().search(search) === -1) {
                    continue;
                }

                App.elements.yourCardsContainer.appendChild(card);

                card.onclick = function (e) {
                    console.log("esta carta foi vendida com sucesso!!!");
                    App.elements.cards.push(e.target);
                    var clickId = App.elements.yourCardsArray.indexOf(e.target);



                    var x = App.elements.cards[App.elements.cards.indexOf(e.target)].childNodes
                    App.controlers.refreshNumber("-" + x[6].textContent);



                    App.elements.yourCardsArray.splice(clickId, 1);
                    e.target.remove();




                    App.controlers.renderMarketCards();
                }


                if (App.elements.yourCardsArray.length == 0) {
                    App.elements.body.removeChild(App.elements.yourCardsContainer);
                    App.elements.createYourCardsContainer();
                }

            }
        },

        renderAllCards: function () {
            var cards = App.store.state.cards;
            console.log("Vamos rendeziar all cards..", cards);

            for (var i = 0; i < cards.length; i++) {
                var card = cards[i];
                console.log(card);

                var el = document.createElement("div");
                el.style.display = "flex";
                //el.className = "div-card";
                el.style.alignContent = "flex-start";
                el.style.width = "150px";
                el.style.height = "300px";
                el.style.flexWrap = "wrap";
                el.style.border = "1px solid black";
                el.style.borderRadius = "5px";
                el.style.margin = "15px";
                el.setAttribute("i", card.id);
                el.getAttribute(i)

                el.onclick = function (e) {
                    console.log(e.target);
                    console.log("esta carta foi adiconada com sucesso!!!");
                    App.elements.yourCardsArray.push(e.target);
                    var clickId = App.elements.cards.indexOf(e.target);

                    console.log("index of........." + App.elements.cards.indexOf(e.target));

                    var x = App.elements.cards[App.elements.cards.indexOf(e.target)].childNodes
                    App.controlers.refreshNumber(x[6].textContent);


                    App.elements.cards.splice(clickId, 1);
                    e.target.remove();
                    App.controlers.renderYourCards();
                }


                var nameDiv = document.createElement("div");
                nameDiv.style.display = "flex";
                nameDiv.style.flex = "1 100%";
                nameDiv.style.textDecoration = "underline";
                nameDiv.style.fontFamily = "arial";
                nameDiv.style.fontSize = "17px";
                nameDiv.style.alignContent = "center";
                nameDiv.style.justifyContent = "center";
                nameDiv.style.marginTop = "5px";
                nameDiv.style.zIndex = "-1";
                nameDiv.innerHTML = card.nome;
                el.appendChild(nameDiv);

                var lifeDiv = document.createElement("div");
                lifeDiv.style.display = "flex";
                lifeDiv.style.flex = "1 100%";
                lifeDiv.style.marginLeft = "5px";
                lifeDiv.style.alignContent = "flex-end";
                lifeDiv.style.zIndex = "-1";
                lifeDiv.innerHTML = card.life;
                el.appendChild(lifeDiv);

                var svg = "http://www.w3.org/2000/svg";
                var life = document.createElementNS(svg, "svg");
                life.setAttributeNS(null, "width", "20px");
                life.setAttributeNS(null, "height", "20px");
                life.setAttributeNS(null, "viewBox", "0 0 24 24");
                lifeDiv.appendChild(life);
                var canvasPath = document.createElementNS(svg, "path");
                canvasPath.setAttributeNS(null, "d", "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z");
                canvasPath.setAttributeNS(null, "fill", "#ff0000");
                life.appendChild(canvasPath);


                var img = document.createElement("img");
                img.style.maxWidth = "100%";
                img.style.maxHeight = "70%";
                img.style.zIndex = "-1";
                img.src = card.url;
                el.appendChild(img);

                var svgDiv = document.createElement("div");
                svgDiv.style.display = "flex";
                svgDiv.style.flex = "1 100%";
                svgDiv.style.marginLeft = "5px";
                svgDiv.style.marginRight = "5px";
                svgDiv.style.justifyContent = "space-between";
                svgDiv.style.zIndex = "-1";
                el.appendChild(svgDiv);


                var sword = document.createElementNS(svg, "svg");
                sword.setAttributeNS(null, "width", "20px");
                sword.setAttributeNS(null, "height", "20px");
                sword.setAttributeNS(null, "viewBox", "0 0 30.011 30.011");
                svgDiv.appendChild(sword);
                var canvasPath = document.createElementNS(svg, "path");
                canvasPath.setAttributeNS(null, "d", "m29.011,.015h-8c-0.285,0-0.764,0.239-0.899,0.409l-10.149,13.912-3.468-3.464c-0.388-0.388-1.017-0.388-1.405,0l-2.812,2.808c-0.388,0.388-0.388,1.017 0,1.404l4.216,4.212-5.607,5.602h0.003c-0.005,0.005-0.012,0.009-0.018,0.014-1.164,1.163-1.164,3.049 0,4.212 1.164,1.163 3.052,1.163 4.216,0 0.006-0.005 0.009-0.013 0.015-0.019 0,0.001 0,0.005 0,0.005l5.606-5.602 4.216,4.212c0.388,0.388 1.017,0.388 1.406,0l2.811-2.809c0.389-0.388 0.389-1.016 0-1.403l-3.468-3.464 13.929-10.138c0.166-0.133 0.408-0.549 0.408-0.891v-8c-3.55271e-15-0.553-0.448-1-1-1zm-25.327,27.705c-0.388,0.388-1.018,0.388-1.406,0s-0.388-1.017 0-1.404 1.018-0.388 1.406,0c0.388,0.388 0.388,1.016 0,1.404zm2.108-2.106l-1.405-1.404 3.513-3.51 1.405,1.404-3.513,3.51zm11.244-1.404l-1.406,1.403-11.243-11.231 1.405-1.404 11.244,11.232zm10.975-15.476l-13.684,9.962-.805-.804 10.259-10.249c0.388-0.388 0.388-1.016 0-1.403s-1.017-0.388-1.405,0l-10.259,10.248-.805-.804 9.971-13.669h6.727v6.719z");
                canvasPath.setAttributeNS(null, "fill", "#808080");
                sword.appendChild(canvasPath);

                var shield = document.createElementNS(svg, "svg");
                shield.setAttributeNS(null, "width", "20px");
                shield.setAttributeNS(null, "height", "20px");
                shield.setAttributeNS(null, "viewBox", "0 0 628.727 628.728");
                svgDiv.appendChild(shield);
                var canvasPath = document.createElementNS(svg, "path");
                canvasPath.setAttributeNS(null, "d", "M312.204,54.497L73.45,126.226c-3.126,0.941-5.292,3.785-5.367,7.05c-0.072,3.314-1.439,82.202,27.554,176.43 C144.34,467.981,239.74,540.703,311.193,573.839c1.01,0.468,2.09,0.7,3.171,0.7c1.082,0,2.162-0.232,3.171-0.7    c129.453-60.034,188.669-176.775,215.546-264.133c28.992-94.228,27.625-173.115,27.554-176.43    c-0.076-3.262-2.241-6.109-5.368-7.05L316.526,54.497C315.126,54.076,313.615,54.076,312.204,54.497z M545.571,139.042    c-0.241,19.445-2.896,88.495-27.012,166.66c-25.783,83.561-82.119,194.921-204.191,252.982    c-122.075-58.064-178.414-169.425-204.197-252.982c-24.12-78.165-26.77-147.214-27.016-166.66l231.213-69.46L545.571,139.042z");
                canvasPath.setAttributeNS(null, "fill", "#808080");
                shield.appendChild(canvasPath);
                var canvasPath2 = document.createElementNS(svg, "path");
                canvasPath2.setAttributeNS(null, "d", "M620.345,79.094c-0.079-3.419-2.444-6.361-5.771-7.16L316.135,0.206c-1.165-0.275-2.362-0.275-3.526,0L14.153,71.935 c-3.326,0.799-5.695,3.74-5.77,7.16C8.36,80.104,6.598,181.547,42.758,299.032c60.682,197.176,179.476,287.74,268.446,328.996    c1.005,0.467,2.086,0.7,3.167,0.7s2.162-0.233,3.168-0.7c161.192-74.737,234.949-220.163,268.438-328.996    C622.13,181.543,620.365,80.104,620.345,79.094z M571.584,294.598c-32.375,105.191-103.248,245.435-257.211,318.274    C160.556,540.104,89.687,400.061,57.286,295.024c-30.653-99.383-33.622-186.982-33.84-209.832l290.927-69.917l290.915,69.917    C605.074,107.993,602.144,195.283,571.584,294.598z");
                canvasPath2.setAttributeNS(null, "fill", "#808080");
                shield.appendChild(canvasPath2);

                var attack = document.createElement("div");
                attack.style.display = "flex";
                attack.style.justifyContent = "flex-start";
                attack.style.marginLeft = "6px";
                attack.style.width = "69px";
                attack.style.zIndex = "-1";
                attack.innerHTML = card.attack;
                el.appendChild(attack);

                var defense = document.createElement("div");
                defense.style.display = "flex";
                defense.style.justifyContent = "flex-end";
                defense.style.marginRight = "6px";
                defense.style.width = "69px";
                defense.style.zIndex = "-1";
                defense.innerHTML = card.defense;
                el.appendChild(defense);

                var cashDiv = document.createElement("div");
                cashDiv.style.display = "flex";
                cashDiv.style.flex = "1 100%";
                cashDiv.style.justifyContent = "center";
                cashDiv.style.alignContent = "center";
                cashDiv.style.zIndex = "-1";
                el.appendChild(cashDiv);

                var cashButton = document.createElement("button");
                cashButton.style.backgroundColor = "#fafafa";
                //cashButton.style.border = "none";                
                cashButton.style.color = "#3c4043";
                cashButton.style.borderRadius = "5px";
                //cashButton.style.outline = "none";
                cashButton.style.height = "28px";
                cashButton.style.width = "65px";
                cashButton.style.fontFamily = "arial, sans-serif";
                cashButton.style.fontSize = "14px";
                cashButton.style.cursor = "pointer";

                cashDiv.appendChild(cashButton);

                // cashButton.onclick = function(e) {
                //     console.log("apertando botao..." + "Botao...." + e.target);
                // }

                var cash = document.createElementNS(svg, "svg");
                cash.setAttributeNS(null, "width", "20px");
                cash.setAttributeNS(null, "height", "20px");
                cash.setAttributeNS(null, "viewBox", "0 0 24 24");
                cash.setAttributeNS(null, "fill", "none");
                cash.setAttributeNS(null, "stroke", "currentColor");
                cash.setAttributeNS(null, "stroke-width", "2");
                cash.setAttributeNS(null, "stroke-linecap", "round");
                cash.setAttributeNS(null, "stroke-linejoin", "round");
                cashButton.appendChild(cash);
                var line = document.createElementNS(svg, "line");
                line.setAttributeNS(null, "x1", "12");
                line.setAttributeNS(null, "x2", "12");
                line.setAttributeNS(null, "y1", "1");
                line.setAttributeNS(null, "y2", "23");
                line.setAttributeNS(null, "fill", "#808080");
                cash.appendChild(line);
                var canvasPath = document.createElementNS(svg, "path");
                canvasPath.setAttributeNS(null, "d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6");
                canvasPath.setAttributeNS(null, "fill", "#808080");
                cash.appendChild(canvasPath);

                var cashNumber = document.createElement("span");
                cashNumber.style.fontSize = "20px";
                cashNumber.innerHTML = card.price;
                cashButton.appendChild(cashNumber);


                App.elements.cards[card.id] = el;
                App.elements.marketContainer.appendChild(el);
            }
        }
    },
    elements: {
        app: document.getElementById("app"),
        header: document.createElement("div"),
        body: document.createElement("div"),
        footer: document.createElement("div"),
        cardDiv: document.createElement("div"),
        marketContainer: document.createElement("div"),
        cards: [],
        marketDropDown: null,
        canvasPath: null,
        marketDropDownButton: document.createElement("button"),
        marketHeader: document.createElement("div"),
        yourCardsHeader: document.createElement("div"),
        yourCardsContainer: document.createElement("div"),
        yourCardsArray: [],
        inputContainer: document.createElement("div"),
        input: document.createElement("input"),
        walletContainer: document.createElement("div"),
        randomNumber: document.createElement("span"),
        number: null,



        createApp: function () {
            this.app.style.position = "absolute";
            this.app.style.width = "100%";
            this.app.style.height = "100%";
            //this.app.style.border = "1px solid black";
        },

        createLupa: function () {
            var svg = "http://www.w3.org/2000/svg";
            this.barLupa = document.createElementNS(svg, "svg");
            this.barLupa.setAttributeNS(null, "width", "20px");
            this.barLupa.setAttributeNS(null, "height", "20px");
            this.barLupa.style.display = "inline-block";
            this.barLupa.style.marginTop = "auto";
            this.barLupa.style.marginBottom = "auto";
            this.barLupa.style.marginLeft = "0.6rem";

            var canvasPath = document.createElementNS(svg, "path");
            canvasPath.setAttributeNS(null, "d", "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z");
            canvasPath.setAttributeNS(null, "fill", "#9aa0a6");
            this.barLupa.appendChild(canvasPath);
            this.inputContainer.appendChild(this.barLupa);

        },

        createInput: function () {
            this.input.type = "text";
            this.input.style.marginLeft = "0.75rem";
            this.input.style.width = "6rem";
            this.input.style.backgroundColor = "transparent";
            this.input.style.border = "none";
            this.input.style.font = "16px arial, sans-serif";
            this.input.style.wordWrap = "break-word";
            this.input.style.outline = "none";
            this.input.onkeyup = function (e) {
                App.store.state.search = e.target.value.toLowerCase();
                App.controlers.renderMarketCards();
                App.controlers.renderYourCards();

            };
            this.inputContainer.appendChild(this.input);
        },

        createInputContainer: function () {
            this.inputContainer.style.display = "flex";
            this.inputContainer.style.border = "1px solid lightgray";
            this.inputContainer.style.borderRadius = "22px";
            this.inputContainer.style.width = "10rem";
            this.inputContainer.style.height = "36px";
            this.inputContainer.style.marginLeft = "1rem";
            this.inputContainer.style.marginTop = "auto";
            this.inputContainer.style.marginBottom = "auto";
            this.createLupa();
            this.createInput();
            this.header.appendChild(this.inputContainer);


        },

        createRandomNumber: function () {
            if (this.number != null) {
                this.walletContainer.removeChild(this.randomNumber);
            }
            if (this.number == null) {
                var min = Math.ceil(70);
                var max = Math.floor(150);
                this.number = Math.floor(Math.random() * (150 - 70 + 1)) + 70;
            }

            this.randomNumber.innerHTML = this.number;
            this.randomNumber.style.justifyContent = "center";
            this.randomNumber.style.alignContent = "center";
            this.randomNumber.style.marginTop = "auto";
            this.randomNumber.style.marginBottom = "auto";

            this.walletContainer.appendChild(this.randomNumber);

        },

        createWalletContainer: function () {
            this.walletContainer.style.display = "flex";
            this.walletContainer.style.justifyContent = "center";
            this.walletContainer.style.alignContent = "center";
            this.walletContainer.style.marginRight = "1rem";

            var svg = "http://www.w3.org/2000/svg";
            this.wallet = document.createElementNS(svg, "svg");
            this.wallet.setAttributeNS(null, "width", "20px");
            this.wallet.setAttributeNS(null, "height", "20px");
            this.wallet.style.display = "inline-block";
            this.wallet.style.marginTop = "auto";
            this.wallet.style.marginBottom = "auto";

            var canvasPath = document.createElementNS(svg, "path");
            canvasPath.setAttributeNS(null, "d", "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z");
            canvasPath.setAttributeNS(null, "fill", "#9aa0a6");
            this.wallet.appendChild(canvasPath);
            this.walletContainer.appendChild(this.wallet);

            var cash = document.createElementNS(svg, "svg");
            cash.style.display = "inline-block";
            cash.style.marginTop = "auto";
            cash.style.marginBottom = "auto";
            cash.setAttributeNS(null, "width", "16px");
            cash.setAttributeNS(null, "height", "16px");
            cash.setAttributeNS(null, "viewBox", "0 0 24 24");
            cash.setAttributeNS(null, "fill", "none");
            cash.setAttributeNS(null, "stroke", "currentColor");
            cash.setAttributeNS(null, "stroke-width", "2");
            cash.setAttributeNS(null, "stroke-linecap", "round");
            cash.setAttributeNS(null, "stroke-linejoin", "round");
            this.walletContainer.appendChild(cash);
            var line = document.createElementNS(svg, "line");
            line.setAttributeNS(null, "x1", "12");
            line.setAttributeNS(null, "x2", "12");
            line.setAttributeNS(null, "y1", "1");
            line.setAttributeNS(null, "y2", "23");
            line.setAttributeNS(null, "fill", "#808080");
            cash.appendChild(line);
            var canvasPath = document.createElementNS(svg, "path");
            canvasPath.setAttributeNS(null, "d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6");
            canvasPath.setAttributeNS(null, "fill", "#808080");
            cash.appendChild(canvasPath);

            this.createRandomNumber();

            this.header.appendChild(this.walletContainer);

        },

        createHeader: function () {
            this.header.style.display = "flex";
            this.header.style.flex = "1 100%";
            this.header.style.flexWrap = "wrap";
            this.header.style.justifyContent = "space-between";
            this.createInputContainer();
            this.createWalletContainer();

            this.app.appendChild(this.header);

        },

        createMarketDropDownButton: function () {
            this.marketDropDownButton.style.width = "40px";
            this.marketDropDownButton.style.height = "40px";
            this.marketDropDownButton.style.cursor = "pointer";
            this.marketDropDownButton.style.border = "none";
            this.marketDropDownButton.style.outline = "none";

            this.createMarketDropDown();

            if (App.store.state.isDropDownOpen) {
                this.marketDropDownButton.onmouseover = function () {
                    App.elements.pathArrowUp.setAttributeNS(null, "d", "M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z");
                    App.elements.pathArrowUp.setAttributeNS(null, "fill", "#808080");
                    App.elements.marketDropDown.appendChild(App.elements.pathArrowUp);
                }
            }
            else {

                this.marketDropDownButton.onmouseover = function () {
                    App.elements.pathArrowDown.setAttributeNS(null, "d", "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z");
                    App.elements.pathArrowDown.setAttributeNS(null, "fill", "#808080");
                    App.elements.marketDropDown.appendChild(App.elements.pathArrowDown);

                }
            }

            if (App.store.state.isDropDownOpen) {
                this.marketDropDownButton.onmouseout = function () {
                    App.elements.pathArrowUp.setAttributeNS(null, "d", "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z");
                    App.elements.pathArrowUp.setAttributeNS(null, "fill", "#808080");
                    App.elements.marketDropDown.appendChild(App.elements.pathArrowUp);
                }
            }
            else {

                this.marketDropDownButton.onmouseout = function () {
                    App.elements.pathArrowDown.setAttributeNS(null, "d", "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z");
                    App.elements.pathArrowDown.setAttributeNS(null, "fill", "#808080");
                    App.elements.marketDropDown.appendChild(App.elements.pathArrowDown);

                }
            }

            this.marketDropDownButton.onclick = function () {
                App.elements.marketDropDownButton.style.border = "none"
                App.controlers.toggleDropDown();
                App.elements.arrowDirection();
                console.log(App.store.state.isDropDownOpen);
            }

            this.marketHeader.appendChild(this.marketDropDownButton);
        },

        createMarketDropDown: function () {
            var svg = "http://www.w3.org/2000/svg";
            this.marketDropDown = document.createElementNS(svg, "svg");
            this.marketDropDown.setAttributeNS(null, "width", "20px");
            this.marketDropDown.setAttributeNS(null, "height", "20px");
            this.marketDropDown.setAttributeNS(null, "viewBox", "0 0 16 16");
            this.marketDropDownButton.appendChild(this.marketDropDown);

            this.pathArrowUp = document.createElementNS(svg, "path");
            this.pathArrowUp.setAttributeNS(null, "d", "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z");
            this.pathArrowUp.setAttributeNS(null, "fill", "#808080");


            this.pathArrowDown = document.createElementNS(svg, "path");
            this.pathArrowDown.setAttributeNS(null, "d", "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z");
            this.pathArrowDown.setAttributeNS(null, "fill", "#808080");

            this.arrowDirection();
        },

        arrowDirection: function () {

            if (App.store.state.isDropDownOpen) {
                App.elements.marketDropDown.appendChild(App.elements.pathArrowUp);
                App.elements.pathArrowDown.setAttributeNS(null, "visibility", "hidden");
                App.elements.pathArrowUp.setAttributeNS(null, "visibility", "visible");
                App.elements.marketContainer.style.display = "none";

            }
            else {
                App.elements.marketDropDown.appendChild(App.elements.pathArrowDown);
                App.elements.pathArrowUp.setAttributeNS(null, "visibility", "hidden");
                App.elements.pathArrowDown.setAttributeNS(null, "visibility", "visible");
                App.elements.marketContainer.style.display = "flex";
            }
        },

        createMarketHeaderSpan: function (text, a) {
            this.marketHeaderSpan = document.createElement("span");
            this.marketHeaderSpan.style.fontSize = "34px";
            this.marketHeaderSpan.style.fontFamily = "arial";
            this.marketHeaderSpan.innerHTML = text;
            if (a == 1) {
                this.yourCardsHeader.appendChild(this.marketHeaderSpan);
            }
            else if (a == 2) {
                this.marketHeader.appendChild(this.marketHeaderSpan);
            }

        },

        createYourCardsHeader: function () {
            var a = 1;
            this.yourCardsHeader.style.display = "flex";
            this.yourCardsHeader.style.flex = "1 100%";
            this.yourCardsHeader.style.justifyContent = "center";
            this.yourCardsHeader.style.alignContent = "center";
            this.yourCardsHeader.style.textAlign = "center";
            this.yourCardsHeader.style.borderRadius = "22px";
            this.yourCardsHeader.style.border = "1px solid blue";
            this.yourCardsHeader.style.marginTop = "0.5rem";
            this.createMarketHeaderSpan("Your Cards", a);
            this.body.appendChild(this.yourCardsHeader);

        },

        createYourCardsContainer: function () {
            this.yourCardsContainer.style.display = "flex";
            this.yourCardsContainer.style.flexDirection = "row";
            this.yourCardsContainer.style.flexWrap = "wrap";
            this.yourCardsContainer.style.justifyContent = "flex-start";
            //this.yourCardsContainer.style.border = "1px solid green";
            this.yourCardsContainer.style.minHeight = "15px";
            if (this.yourCardsArray.length == 0) {
                this.yourCardsContainer.innerHTML = "Don´t have Cards";
            }
            this.body.appendChild(this.yourCardsContainer);


        },

        createMarketHeader: function () {
            var a = 2;
            this.marketHeader.style.display = "flex";
            this.marketHeader.style.flex = "1 100%";
            this.marketHeader.style.justifyContent = "center";
            this.marketHeader.style.alignContent = "center";
            this.marketHeader.style.textAlign = "center";
            this.marketHeader.style.borderRadius = "22px";
            this.marketHeader.style.border = "1px solid blue";
            this.createMarketDropDownButton();
            this.createMarketHeaderSpan("Cards Market", a);
            this.body.appendChild(this.marketHeader);
        },

        createMarketContainer: function () {
            this.marketContainer.style.display = "flex";
            this.marketContainer.style.flexDirection = "row";
            this.marketContainer.style.flexWrap = "wrap";
            this.marketContainer.style.justifyContent = "flex-start";

            //this.marketContainer.style.border = "1px solid blue"

            this.body.appendChild(this.marketContainer);

        },

        createBody: function () {
            this.body.style.position = "flex";
            //this.body.style.border = "1px solid green";
            this.createYourCardsHeader();
            this.createYourCardsContainer();
            this.createMarketHeader();
            this.createMarketContainer();
            this.app.appendChild(this.body);


        },
        createFooterSpan: function () {
            this.footerSpan = document.createElement("div");
            this.footerSpan.innerHTML = "RPG Cards Market";
            this.footer.appendChild(this.footerSpan);
        },

        createFooter: function () {
            this.footer.style.display = "flex";
            //this.footer.style.flex = "1 100%";
            //this.footer.style.position = "absolute";
            this.footer.style.bottom = "0";
            this.footer.style.right = "0";
            this.footer.style.left = "0";
            this.footer.style.alignContent = "center";
            this.footer.style.justifyContent = "center";
            this.footer.style.margin = "auto";
            this.createFooterSpan();
            this.footer.style.border = "1px solid red";
            this.app.appendChild(this.footer);
        },



        createElements: function () {
            console.log("Iniciando a criação dos elementos");

            console.log("element", this);

            this.createApp();
            this.createHeader();
            this.createBody();
            this.createFooter();
            console.log(this.app);

            console.log("Elementos criados");



        }
    }

};

App.init();


