import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsProvider {


  brands: any[] = [{
    "1": {
      "id": 2169,
      "name": "b2",
      "slug": "b-b2"
    }
  }, {
    "2": {
      "id": 2168,
      "name": "ag",
      "slug": "b-ag"
    }
  }, {
    "3": {
      "id": 2167,
      "name": "Abril et nature",
      "slug": "b-abril-et-nature"
    }
  }, {
    "4": {
      "id": 2170,
      "name": "beauty uk",
      "slug": "b-beauty-uk"
    }
  }, {
    "5": {
      "id": 2171,
      "name": "beesline",
      "slug": "b-beesline"
    }
  }, {
    "6": {
      "id": 2172,
      "name": "bella",
      "slug": "b-bella"
    }
  }, {
    "7": {
      "id": 2173,
      "name": "beyu",
      "slug": "b-beyu"
    }
  }, {
    "8": {
      "id": 2174,
      "name": "bourjois",
      "slug": "b-bourjois"
    }
  }, {
    "9": {
      "id": 2175,
      "name": "byphasse",
      "slug": "b-byphasse"
    }
  }, {
    "10": {
      "id": 2176,
      "name": "catrice",
      "slug": "b-catrice"
    }
  }, {
    "11": {
      "id": 2177,
      "name": "covermark",
      "slug": "b-covermark"
    }
  }, {
    "12": {
      "id": 2178,
      "name": "deborah",
      "slug": "b-deborah"
    }
  }, {
    "13": {
      "id": 2179,
      "name": "essence",
      "slug": "b-essence"
    }
  }, {
    "14": {
      "id": 2180,
      "name": "evolux",
      "slug": "b-evolux"
    }
  }, {
    "15": {
      "id": 2181,
      "name": "flormar",
      "slug": "b-flormar"
    }
  }, {
    "16": {
      "id": 2182,
      "name": "forever52",
      "slug": "b-forever52"
    }
  }, {
    "17": {
      "id": 2183,
      "name": "inglot",
      "slug": "b-inglot"
    }
  }, {
    "18": {
      "id": 2184,
      "name": "jewel",
      "slug": "b-jewel"
    }
  }, {
    "19": {
      "id": 2185,
      "name": "lakme",
      "slug": "b-lakme"
    }
  }, {
    "20": {
      "id": 2186,
      "name": "lierac",
      "slug": "b-lierac"
    }
  }, {
    "21": {
      "id": 2187,
      "name": "makeupfactory",
      "slug": "b-makeupfactory"
    }
  }, {
    "22": {
      "id": 2188,
      "name": "mavala",
      "slug": "b-mavala"
    }
  }, {
    "23": {
      "id": 2189,
      "name": "max factor",
      "slug": "b-max-factor"
    }
  }, {
    "24": {
      "id": 2190,
      "name": "moremo",
      "slug": "b-moremo"
    }
  }, {
    "25": {
      "id": 2191,
      "name": "murad",
      "slug": "b-murad"
    }
  }, {
    "26": {
      "id": 2192,
      "name": "note",
      "slug": "b-note"
    }
  }, {
    "27": {
      "id": 2193,
      "name": "OPI",
      "slug": "b-opi"
    }
  }, {
    "28": {
      "id": 2194,
      "name": "okay",
      "slug": "b-okay"
    }
  }, {
    "29": {
      "id": 2195,
      "name": "palladio",
      "slug": "b-palladio"
    }
  }, {
    "30": {
      "id": 2196,
      "name": "perfect",
      "slug": "b-perfect"
    }
  }, {
    "31": {
      "id": 2197,
      "name": "pharmaceris",
      "slug": "b-pharmaceris"
    }
  }, {
    "32": {
      "id": 2198,
      "name": "phyto",
      "slug": "b-phyto"
    }
  }, {
    "33": {
      "id": 2199,
      "name": "rimmel-london",
      "slug": "b-rimmel-london"
    }
  }, {
    "34": {
      "id": 2200,
      "name": "rokle",
      "slug": "b-rokle"
    }
  }, {
    "35": {
      "id": 2201,
      "name": "selective professional",
      "slug": "b-selective-professional"
    }
  }, {
    "36": {
      "id": 2202,
      "name": "seventeen",
      "slug": "b-seventeen"
    }
  }, {
    "37": {
      "id": 2203,
      "name": "soskin",
      "slug": "b-soskin"
    }
  }, {
    "38": {
      "id": 2204,
      "name": "stage",
      "slug": "b-stage"
    }
  }, {
    "39": {
      "id": 2205,
      "name": "the balm",
      "slug": "b-the-balm"
    }
  }, {
    "40": {
      "id": 2206,
      "name": "yucca",
      "slug": "b-yucca"
    }
  }, {
    "41": {
      "id": 2207,
      "name": "koke",
      "slug": "b-koke"
    }
  }];

  constructor() {

  }

  getBrands() {
    return this.brands;
  }

}
