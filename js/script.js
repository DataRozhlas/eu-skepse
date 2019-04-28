var barvy = ['#EA614A','#ECA038','#A38456','#008836','#20649B','#6B96CA','#A87A93','#D19C95'];

var zeme = ['Česko','Řecko','Nizozemsko','Francie','Belgie','Portugalsko','Kypr','Bulharsko','Slovensko','EU27','Itálie','Španělsko','Dánsko','Chorvatsko','Slovinsko','Polsko','Německo','Lotyšsko','Finsko','Maďarsko','Lucembursko','Rakousko','Švédsko','Estonsko','Litva','Rumunsko','Malta','Irsko'];

var roky = [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];

var spokojenost = [65,67,52,58,69,65,50,41,48,46,37,35,'NA',45,56];

var pochybnosti = [51,42,40,39,38,37,36,35,34,33,33,33,32,32,32,30,30,30,29,29,28,28,26,23,22,19,19,17];

var nadeje = [19,20,19,29,25,25,20,34,26,28,36,21,28,36,27,30,28,29,26,23,36,27,32,25,15,40,24,21];

var sebevedomi = [19,21,31,18,24,26,24,18,26,27,19,32,27,16,26,29,34,25,37,30,26,37,27,33,44,30,36,51];

var strach = [4,9,3,7,4,7,11,3,4,5,7,4,5,5,6,3,5,2,3,6,4,3,3,4,3,3,4,8];

var nevi = [7,8,7,7,9,5,9,10,10,7,5,10,8,11,9,8,3,14,5,12,6,5,12,15,16,8,17,3];

var fungovanidata = [
{y: 7, color: barvy[4]},
{y: 55, color: barvy[5]},
{y: 27, color: barvy[7]},
{y: 11, color: barvy[0]}
];

var fungovanikat = ['Funguje, není důvod ji reformovat.', 'Jsou nutné změny, ale v EU bychom měli každopádně zůstat.', 'Pokud se nezmění, měli bychom odejít.', 'Odejděme rovnou, nemá to smysl.'];

var vlastenectvicz = [41, 28, 22, 10, 14];

var vlastenectvieu = [34, 6, 3, 2, 1];

var vlastenectvikat = ['přesvědčení zastánci členství', 'vlažní zastánci', 'kritičtí', 'nedůvěřiví', 'odpůrci členství'];

var prioritydul = [45.4,45.4,44.1,39.9,39.2,36.2,36.6,36.7,35.3,35.7,31.8,30.1,26.9,28.8,26.1,27.4,26.4,25.4,22.9,22.1,20.1,17.0,16.0,16.9,16.4,14.5,14.6,11.7,5.9];

var prioritynesm = [9.0,7.4,5.2,5.6,5.3,6.7,3.1,5.1,11.6,6.7,8.8,11.0,4.2,5.1,3.7,9.4,5.5,18.6,12.8,10.6,5.2,12.3,14.4,10.7,16.7,21.8,27.1,15.9,38.4];

var prioritykat = ['Život bez válek v Evropě','Čistší vzduch, zdravější voda i půda','Kvalitní potraviny ve všech zemích','Lepší obrana proti terorismu','Kvalitnější léky','Bezpečnější potraviny a výrobky','Úspěšnější pátrání po ztracených dětech','Lépe placená práce','Řešení migrace v zemi původu','Více potravin od místních zemědělců','Společná ochrana vnější hranice','Společná obrana proti vnějším útokům','Můžu cestovat po Evropě, jako bych byl v ČR','Rychlejší dopadení zločinců','Můžu jít za lepší prací nebo studiem do zahraničí','Nikdo nezneužije mé osobní údaje','Levnější a kvalitnější výrobky, služby a energie','Neovládne nás cizí mocnost','Češi se podílejí na řízení unie','Malé místní firmy budou chráněny proti nadnárodním velikánům','Čeští vědci u důležitých objevů','Podpora chudších regionů','Pomoc s vyšetřováním dotačních podvodů','České speciality nebudou padělány','Pomoc, když přijdu o práci','ČR je součástí velmoci','Pojistka proti ovládnutí soudů ze strany politiků','Neoberou mě podvodní prodejci','Společný vývoj zbraní'];

var wordsevropa = [
{name:"domov",weight:280},
{name:"unie",weight:169},
{name:"evropská",weight:74},
{name:"kontinent",weight:69},
{name:"kultura",weight:60},
{name:"historie",weight:57},
{name:"světadíl",weight:52},
{name:"republika",weight:36},
{name:"civilizace",weight:35},
{name:"cestování",weight:53},
{name:"svoboda",weight:45},
{name:"evropská",weight:27},
{name:"migrace",weight:24},
{name:"bezpečí",weight:19},
{name:"klid",weight:19},
{name:"srdce",weight:18},
{name:"česká",weight:18},
{name:"euro",weight:33},
{name:"migranti",weight:17},
{name:"země",weight:17},
{name:"příroda",weight:16},
{name:"tradice",weight:16},
{name:"světa",weight:16},
{name:"Česko",weight:30},
{name:"ČR",weight:15},
{name:"jistota",weight:14},
{name:"starý",weight:25},
{name:"mír",weight:13},
{name:"památky",weight:12},
{name:"krásná",weight:12},
{name:"střed",weight:12},
{name:"moře",weight:12},
{name:"žiju",weight:12},
{name:"můj",weight:12},
{name:"demokracie",weight:11},
{name:"pohoda",weight:11},
{name:"Praha",weight:11},
{name:"místo",weight:11},
{name:"doma",weight:11},
{name:"krajina",weight:10},
{name:"Evropy",weight:10},
{name:"česká",weight:10},
{name:"život",weight:10},
{name:"tady",weight:10},
{name:"tam",weight:10}
];

var wordseu = [
{name:"euro",weight:64},
{name:"dotace",weight:48},
{name:"států",weight:25},
{name:"Evropa",weight:38},
{name:"společenství",weight:30},
{name:"spolupráce",weight:20},
{name:"Brusel",weight:28},
{name:"pohyb",weight:19},
{name:"byrokracie",weight:26},
{name:"volný",weight:16},
{name:"cestování",weight:20},
{name:"hranice",weight:13},
{name:"bordel",weight:13},
{name:"nic",weight:17},
{name:"buzerace",weight:10},
{name:"unie",weight:10},
{name:"zemí",weight:10},
{name:"migranti",weight:9},
{name:"omezení",weight:9},
{name:"svoboda",weight:16},
{name:"pomoc",weight:9},
{name:"demokracie",weight:8},
{name:"zbytečnost",weight:8},
{name:"pravidla",weight:8},
{name:"migrace",weight:8},
{name:"spojení",weight:8},
{name:"nevím",weight:8},
{name:"moc",weight:8},
{name:"spojenectví",weight:7},
{name:"evropských",weight:7},
{name:"diktatura",weight:7},
{name:"nesmysl",weight:7},
{name:"příkazy",weight:7},
{name:"zákazy",weight:7},
{name:"států",weight:7},
{name:"měna",weight:7},
{name:"EU",weight:7},
{name:"nařízení",weight:6},
{name:"Německo",weight:6},
{name:"brexit",weight:6},
{name:"obchod",weight:6},
{name:"vlajka",weight:6},
{name:"zákony",weight:6},
{name:"předpisy",weight:5},
{name:"bezpečí",weight:5},
{name:"jednota",weight:5},
{name:"chaos",weight:5},
{name:"dobrý",weight:5},
{name:"nápad",weight:5},
{name:"státy",weight:5}
];

var wordsrusko = [
{name:"Putin",weight:197},
{name:"zima",weight:78},
{name:"země",weight:65},
{name:"vodka",weight:51},
{name:"velmoc",weight:41},
{name:"velká",weight:53},
{name:"Moskva",weight:32},
{name:"Sibiř",weight:19},
{name:"stát",weight:18},
{name:"azbuka",weight:12},
{name:"Lenin",weight:16},
{name:"komunismus",weight:14},
{name:"chudoba",weight:9},
{name:"okupace",weight:9},
{name:"východ",weight:9},
{name:"válka",weight:17},
{name:"hokej",weight:8},
{name:"diktatura",weight:7},
{name:"hrozba",weight:7},
{name:"síla",weight:7},
{name:"SSSR",weight:7},
{name:"nesvoboda",weight:12},
{name:"bohatství",weight:6},
{name:"obrovská",weight:6},
{name:"ruština",weight:6},
{name:"nevím",weight:12},
{name:"komunisti",weight:5},
{name:"největší",weight:5},
{name:"Slované",weight:11},
{name:"mocnost",weight:5},
{name:"chudoba",weight:5},
{name:"bývalý",weight:5},
{name:"režim",weight:5},
{name:"Kreml",weight:5},
{name:"války",weight:5},
{name:"mafie",weight:5},
{name:"Krym",weight:5},
{name:"plyn",weight:5},
{name:"svaz",weight:5},
{name:"car",weight:5},
{name:"moc",weight:5},
{name:"zem",weight:5},
{name:"nic",weight:5}
];

var wordsnemecko = [
{name:"soused",weight:18},
{name:"Merkelová",weight:20},
{name:"politika",weight:12},
{name:"sousedé",weight:19},
{name:"země",weight:12},
{name:"ale",weight:12},
{name:"tam",weight:12},
{name:"ekonomika",weight:10},
{name:"Evropa",weight:14},
{name:"dobrý",weight:8},
{name:"migranti",weight:19},
{name:"Merkelové",weight:6},
{name:"partner",weight:6},
{name:"migrace",weight:6},
{name:"chtějí",weight:6},
{name:"moc",weight:6},
{name:"pořádek",weight:5},
{name:"pohodě",weight:5},
{name:"Angela",weight:5},
{name:"pocit",weight:5},
{name:"nevím",weight:5},
{name:"stát",weight:5},
{name:"bude",weight:5},
{name:"nám",weight:5},
{name:"imigranti",weight:8}
];

$(function () {

Highcharts.setOptions({
    lang: {
        months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
        shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
        thousandsSep: ' ',
        decimalPoint:',',
        rangeSelectorZoom: 'Zobrazit'
    }
});

Highcharts.chart('eurobarometr', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Jaká emoce se vám ve spojení s EU vybaví první?'
    },
    subtitle: {
        text: 'duben 2019'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: zeme,
    },
    yAxis: {
        title: {
            text: 'podíl populace'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.series.name}: {point.y} % populace</b>',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://www.europarl.europa.eu/at-your-service/en/be-heard/eurobarometer/emotions-and-political-engagement-towards-the-eu',
        text: 'Zdroj: Eurobarometr'
    },
    series: [{
        name: 'pochybnosti',
        data: pochybnosti,
        color: barvy[0]
    }, {
        name: 'naděje',
        data: nadeje,
        color: barvy[3],
        visible: false
    }, {
        name: 'jistota',
        data: sebevedomi,
        color: barvy[5]
    }, {
        name: 'strach',
        data: strach,
        color: barvy[1],
        visible: false
    }, {
        name: 'nic/neví',
        data: nevi,
        color: 'grey',
        visible: false
    }]
});

Highcharts.chart('stem', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Jste spokojen(a) s naším členstvím v EU?'
    },
    subtitle: {
        text: 'součet odpovědí Určitě ano a Spíše ano'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: roky,
    },
    yAxis: {
        title: {
            text: 'podíl populace'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.series.name}: {point.y} % populace</b>',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: STEM'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            marker: {
                symbol: 'circle'
            }
        }
    },
    series: [{
        name: 'spokojenost',
        data: spokojenost,
        color: barvy[4]
    }]
});

Highcharts.chart('fungovani', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Jak celkově vnímáte fungování EU?'
    },
    subtitle: {
        text: 'prosinec 2018 až únor 2019'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: fungovanikat,
    },
    yAxis: {
        title: {
            text: 'podíl populace'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y} % populace</b>',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://xxx.cz',
        text: 'Zdroj: Behavio + STEM + Europeum'
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'fungovani',
        data: fungovanidata,
        color: barvy[4]
    }]
});

Highcharts.chart('vlastenectvi', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Na koho jste hrdí?'
    },
    subtitle: {
        text: 'prosinec 2018 až únor 2019'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: vlastenectvikat,
    },
    yAxis: {
        title: {
            text: 'podíl skupiny'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y} % skupiny</b> je hrdých {series.name}',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://xxx.cz',
        text: 'Zdroj: Behavio + STEM + Europeum'
    },
    series: [{
        name: 'na Česko',
        data: vlastenectvicz,
        color: barvy[0]
    }, {
        name: 'na EU',
        data: vlastenectvieu,
        color: barvy[4]
    }]
});

Highcharts.chart('priority', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Čím by se zabývala vaše unie?'
    },
    subtitle: {
        text: 'prosinec 2018 až únor 2019'
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: prioritykat,
    },
    yAxis: {
        title: {
            text: 'podíl populace'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y} % populace</b> považuje téma za {series.name}',
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: 'http://xxx.cz',
        text: 'Zdroj: Behavio + STEM + Europeum'
    },
    series: [{
        name: 'důležité/prioritní',
        data: prioritydul,
        color: barvy[5]
    }, {
        name: 'nesmysl',
        data: prioritynesm,
        color: barvy[7],
        visible: false
    }]
});

Highcharts.chart('cloudevropa', {
    series: [{
        type: 'wordcloud',
        data: wordsevropa,
        name: 'výskytů',
        colors: [barvy[0]],
        rotation: {
            from: 0,
            to: 0,
            orientations: 1
        },
        minFontSize: 2,
        maxFontSize: 25,
        style: {"fontFamily":"sans-serif", "fontWeight": "900"}
    }],
    title: {
        text: 'Evropa'
    },
    credits: {
        text: ''
    }
});

Highcharts.chart('cloudeu', {
    series: [{
        type: 'wordcloud',
        data: wordseu,
        name: 'výskytů',
        colors: [barvy[4]],
        rotation: {
            from: 0,
            to: 0,
            orientations: 1
        },
        minFontSize: 2,
        maxFontSize: 25,
        style: {"fontFamily":"sans-serif", "fontWeight": "900"}
    }],
    title: {
        text: 'EU'
    },
    credits: {
        text: ''
    }
});

Highcharts.chart('cloudrusko', {
    series: [{
        type: 'wordcloud',
        data: wordsrusko,
        name: 'výskytů',
        colors: [barvy[1]],
        rotation: {
            from: 0,
            to: 0,
            orientations: 1
        },
        minFontSize: 2,
        maxFontSize: 25,
        style: {"fontFamily":"sans-serif", "fontWeight": "900"}
    }],
    title: {
        text: 'Rusko'
    },
    credits: {
        text: ''
    }
});

Highcharts.chart('cloudnemecko', {
    series: [{
        type: 'wordcloud',
        data: wordsnemecko,
        name: 'výskytů',
        colors: [barvy[3]],
        rotation: {
            from: 0,
            to: 0,
            orientations: 1
        },
        minFontSize: 2,
        maxFontSize: 25,
        style: {"fontFamily":"sans-serif", "fontWeight": "900"}
    }],
    title: {
        text: 'Německo'
    },
    credits: {
        text: ''
    }
});

})