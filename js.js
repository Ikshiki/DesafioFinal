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
            cards: cards,
        }
    },
    controlers: {

        svgPath: function(ori, color) {            
                var svg = "http://www.w3.org/2000/svg";
                

                
        },

        renderAllCards: function () {
            var cards = App.store.state.cards;
            console.log("Vamos rendeziar all cards", cards);

            for (var i = 0; i < cards.length; i++) {
                var card = cards[i];
                console.log(card);

                var el = document.createElement("div");
                el.style.display = "flex";
                //el.className = "div-card";
                el.style.alignContent = "flex-start";
                el.style.width = "150px";
                el.style.height = "250px";
                el.style.flexWrap = "wrap";
                el.style.border = "1px solid pink";
                el.style.borderRadius = "5px";
                el.style.margin = "15px";
               

                var nameDiv = document.createElement("div");
                nameDiv.style.display = "flex";
                nameDiv.style.flex = "1 100%";
                nameDiv.style.fontFamily = "arial";
                nameDiv.style.fontSize = "15px";
                nameDiv.style.alignContent = "center";
                nameDiv.style.justifyContent = "center";
                nameDiv.innerHTML = card.nome;
                el.appendChild(nameDiv);

                var lifeDiv = document.createElement("div");
                lifeDiv.style.display = "flex";
                lifeDiv.style.alignContent = "flex-end";
                lifeDiv.innerHTML = card.life;
                el.appendChild(lifeDiv);

                var svg = "http://www.w3.org/2000/svg";
                var life = document.createElementNS(svg, "svg");
                life.setAttributeNS(null, "width", "20px");
                life.setAttributeNS(null, "height", "20px");
                life.setAttributeNS(null, "viewBox", "0 0 32 32");
                lifeDiv.appendChild(life);
                var canvasPath = document.createElementNS(svg, "path");
                canvasPath.setAttributeNS(null, "d", "M16.7070313,2.2929688c-0.390625-0.390625-1.0234375-0.390625-1.4140625,0C14.9135742,2.6723633,6,11.6816406,6,20    c0,5.5141602,4.4858398,10,10,10c5.5136719,0,10-4.4858398,10-10C26,11.6816406,17.0869141,2.6723633,16.7070313,2.2929688z     M16,28c-4.4111328,0-8-3.5888672-8-8c0-6.2075195,5.9248047-13.2612305,8.0004883-15.5410156    C18.0761719,6.7368164,24,13.7836914,24,20C24,24.4111328,20.4111328,28,16,28z");
                canvasPath.setAttributeNS(null, "fill", "#ff0000");
                life.appendChild(canvasPath);
                var canvasPath2 = document.createElementNS(svg, "path");
                canvasPath2.setAttributeNS(null, "d", "M16,24c-2.2055664,0-4-1.8105469-4-4.0356445c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1    C10,23.2924805,12.6914063,26,16,26c0.5522461,0,1-0.4477539,1-1S16.5522461,24,16,24z");
                canvasPath2.setAttributeNS(null, "fill", "#ff0000");
                life.appendChild(canvasPath);


                var img = document.createElement("img");
                img.style.maxWidth = "100%";
                img.style.maxHeight = "70%";
                img.src = card.url;
                el.appendChild(img);

                var svgDiv= document.createElement("div");
                svgDiv.style.display = "flex";
                svgDiv.style.flex = "1 100%";
                svgDiv.style.justifyContent = "space-between";
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
                shield.appendChild(canvasPath);

                var attack = document.createElement("div");
                attack.style.display = "flex";
                attack.style.justifyContent = "flex-start";
                attack.style.width = "75px";
                attack.innerHTML = card.attack;
                el.appendChild(attack);

                var defense = document.createElement("div");
                defense.style.display = "flex";
                defense.style.justifyContent = "flex-end";
                defense.style.width = "75px";
                defense.innerHTML = card.defense;
                el.appendChild(defense);
                


                                


                App.elements.cards[cards.id] = el;
                App.elements.marketContainer.appendChild(el);                
            }
        },
    },
    elements: {
        app: document.getElementById("app"),
        header: document.createElement("div"),
        body: document.createElement("div"),
        footer: document.createElement("div"),
        cardDiv: document.createElement("div"),
        marketContainer: document.createElement("div"),
        cards: {},


        createApp: function () {
            this.app.style.position = "absolute";
            this.app.style.width = "100%";
            this.app.style.height = "100%";
            this.app.style.border = "1px solid black";
        },

        createHeader: function () {
            this.header.style.position = "flex";
            this.header.style.flex = "1 100%"
            this.header.innerHTML = "Eu sou o header";
            this.header.style.height = "50px";
            this.header.style.border = "1px solid blue";
            this.app.appendChild(this.header);
        },

        createCardDiv: function (el) {
            el = document.createElement("div");
            el.style.width = "100px";
            el.style.height = "150px";
            el.style.border = "1px solid pink";
            el.style.margin = "15px";
            this.marketContainer.appendChild(el);
        },

        createMarketContainer: function () {
            this.marketContainer.style.display = "flex";
            this.marketContainer.style.flexDirection = "row";
            this.marketContainer.style.flexWrap = "wrap";
            this.marketContainer.style.justifyContent = "flex-start";
            this.marketContainer.style.border = "1px solid green";


            var cards = App.store.state.cards;
            console.log("vamos renderizar all cards...", cards);

            //TESTE PARA CRIAR VARIAS DIVS
            // for (var i = 0; i < 10; i++) {
            //     this.createCardDiv(this.teste + i);

            // }


            this.body.appendChild(this.marketContainer);

        },

        createBody: function () {
            this.body.style.position = "flex";
            this.body.innerHTML = "Eu sou o body";
            this.body.style.border = "1px solid green";
            this.createMarketContainer();
            this.app.appendChild(this.body);


        },

        createFooter: function () {
            this.footer.style.position = "flex";
            this.footer.style.flex = "1 100%"
            this.footer.style.height = "50px";
            this.footer.innerHTML = "Eu sou o footer";
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


