var config = {
    style: 'mapbox://styles/rr3006/ckpz4bnvs2p3j17lmdt1a22be',
    accessToken: 'pk.eyJ1IjoicnIzMDA2IiwiYSI6ImNrcDk5b3duODBodG8ydm4xazF1NGdtMm0ifQ.fzlRQNBHkZ69OuoMO2iZsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Kennerum Kaanum, Kollamum Kannum',
    subtitle: 'Regulatory Informality, Enclosure, and Water in Chennai',
    byline: 'HISTBC3842 / Subaltern Urbanism / Summer 2021 / Ranjani Srinivasan',
    footer: 'Citations: [1] The Wire. “Did Chennai Learn Anything from the 2015 Floods?” Accessed June 9, 2021. [2] Ibid; “Chennai Floods: What Happened at Chembarambakkam, Negligence or Nature’s Fury? | The News Minute.” Accessed June 9, 2021; The Week. “Nivar Cyclone: Why Chembarambakkam Lake Brought Back Fears of 2015 Floods.” Accessed June 9, 2021. ',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'INTRODUCTION',
            image: '',
            description: 'In 2015, Chennai city experienced its worst floods in more than a century. After receiving around 340mm of rain on November 15, and later 490mm on December 1, the inner city was completely inundated. [1] Thousands were evacuated from low-lying inundated areas and around 500 people lost their lives.',
            location: {
                center: [79.96067, 13.11098],
                zoom: 9.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ]
        },
        {
            id: 'november24',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'And as seen from this series of overlays, flooding around November 24 although significant, pales in comparison to the aftermath of December 2, when most of the inner city remained under water. Media reports  pointed to bureaucratic delays in opening the sluice gates of the 3645-million-cubic-feet-large Chembarambakkam Reservoir—one of the four main rain-fed reservoirs that supply the city with water—as one of the key factors that caused further flooding.[2]',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.83,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'flood-nov-24-193oe4',
                opacity: 0.5,
                duration: 3000
                }
            ],
            onChapterExit: [
                {
                layer: 'flood-nov-24-193oe4',
                opacity: 0
                }
            ]
        },
        {
            id: 'december',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The large, uncontrolled, volume of water that needed to be released to prevent a breach of the lake walls, was routed through the Adyar river—one of the three rivers that drain the region—which then overflowed its banks into the upscale neighbourhoods and informal settlements that lined its shores. The diagnosis was clear: too much water had been released in too short a period. Yet, despite widespread destruction, the floods were written off as a once-in-century incident, that could hardly become the barometer against which the city’s planning authorities could be judged. After all, as the official line sought establish, little could be done about the vagaries of the climate or a particularly destructive El Niño.',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.83,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'flooded-streets_heatmap',
                opacity: 0.7,
                duration: 3000
                }
            ],
            onChapterExit: [
                {
                layer: 'flooded-streets_heatmap',
                opacity: 0
                }
            ]
        },
        {
            id: 'droughtparadox',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Nevertheless, cyclical flood and drought years in the city are nothing new. Paradoxically, the succeeding years after 2015 have all been drought-ridden, and in 2019, Chennai became one of the first cities in the world to run out of water —trucking in 10 million liters a day to hydrate its population.  By July 2020, the city had experienced 200 days without a drop of rain. With a metropolitan region of 1189 square kilometres and a population of around 8 million, Chennai’s inhabitants have begun to brace themselves as the yearly cyclone season sets in—ready to face upheaval.',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.83,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Adyar Ecopark',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [80.26556, 13.01529],
                zoom: 14.28,
                pitch: 50,
                bearing: -25.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
