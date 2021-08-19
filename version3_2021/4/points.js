var points = [
  [50.2210922667, 7.2209316333, "2"],
  [50.2210819833, 7.2213903167, "3"],
  [50.2210881833, 7.2215004833, "3A"],
  [50.2211946833, 7.2213655333, "1"],
  [50.2209458667, 7.2214051333, "5"],
  [50.2208292333, 7.2214374833, "7"],
  [50.2325816, 7.2238798667, "537"],
  [50.2315855167, 7.2279767, "454"],
  [50.2096336833, 7.2223743833, "176"],
  [50.20970685, 7.2221815833, "178"],
  [50.2102146667, 7.2211562833, "190"],
  [50.2088037167, 7.2242227, "156"],
  [50.2112330167, 7.2193425667, "210"],
  [50.2116368667, 7.2193005167, "212"],
  [50.20812645, 7.2255449333, "146"],
  [50.2080231333, 7.2286383167, "125"],
  [50.2089538667, 7.2222222333, "174"],
  [50.2080905833, 7.2275400667, "129"],
  [50.208811, 7.2227592833, "172"],
  [50.20832975, 7.2276898167, "131"],
  [50.2089395333, 7.2281710333, "133"],
  [50.2093421, 7.2274883167, "135"],
  [50.2084820833, 7.22601925, "137"],
  [50.20881015, 7.22622865, "139"],
  [50.2090947667, 7.2263585667, "141"],
  [50.2092962333, 7.2244872333, "147"],
  [50.2091016667, 7.2249140167, "145"],
  [50.2088785167, 7.2253611667, "143"],
  [50.20825965, 7.22530115, "148"],
  [50.20995685, 7.2238554333, "153"],
  [50.20975435, 7.2238417833, "151"],
  [50.20950755, 7.2237912, "149"],
  [50.2092772667, 7.2231980833, "170"],
  [50.2082753833, 7.20672975, "4"],
  [50.2078434833, 7.211822, "56"],
  [50.2083775667, 7.2090812333, "30B"],
  [50.2084588, 7.2058838167, "174"],
  [50.2088788333, 7.2062702833, "175"],
  [50.2091632833, 7.20514875, "182A"],
  [50.2094891167, 7.20384695, "202"],
  [50.2156715667, 7.2034881667, "277"],
  [50.2109189333, 7.2024631, "220"],
  [50.2108164333, 7.2039622, "219"],
  [50.2125773667, 7.2026079667, "238"],
  [50.2125799333, 7.2032824, "241A"],
  [50.2125869, 7.2037423833, "241C"],
  [50.2140266833, 7.2025706, "256"],
  [50.20932, 7.2051094333, "182B"],
  [50.2098799667, 7.2040444167, "197"],
  [50.2094298833, 7.20561245, "189"],
  [50.2172409333, 7.2035291167, "287"],
  [50.2232166667, 7.22452865, "2028"],
  [50.2225024333, 7.2249944667, "2022"],
  [50.22334135, 7.2244748667, "2030"],
  [50.2229725333, 7.2246809333, "2026"],
  [50.2224034667, 7.22507345, "2020"],
  [50.2227806, 7.2248285833, "2024"],
  [50.2178801, 7.2181871667, "6"],
  [50.21811315, 7.2180543667, "4"],
  [50.2181739833, 7.21851995, "1"],
  [50.21797515, 7.2186312, "3"],
  [50.2181787, 7.2176995, "2A"],
  [50.2183385333, 7.21812895, "2"],
  [50.2293053167, 7.2105357833, "31"],
  [50.2309444333, 7.21208735, "16"],
  [50.2306726667, 7.2115020833, "19"],
  [50.2300903, 7.2120791, "26"],
  [50.2289416167, 7.2113778333, "33"],
  [50.2274969167, 7.2113355167, "53"],
  [50.2199192667, 7.2173622833, "5A"],
  [50.2200392833, 7.2174100167, "3"],
  [50.2196328, 7.2167642, "18"],
  [50.21752585, 7.2155467667, "22C"],
  [50.21766615, 7.2153714167, "22B"],
  [50.2179022667, 7.2151616833, "22A"],
  [50.2191980333, 7.21664245, "20A"],
  [50.21799325, 7.21565925, "20C"],
  [50.2187486333, 7.2165228667, "20B"],
  [50.21964875, 7.2172874167, "7"],
  [50.21925545, 7.2171617, "11"],
  [50.2190491667, 7.2170928333, "13"],
  [50.2194515667, 7.2172147167, "9"],
  [50.21981045, 7.21733245, "5B"],
  [50.21876595, 7.2172445167, "15B"],
  [50.2185999167, 7.2172441, "17A"],
  [50.21816745, 7.21725905, "21B"],
  [50.2182157167, 7.2164626333, "24"],
  [50.2180109667, 7.2173984167, "23A"],
  [50.2179918, 7.217159, "23B"],
  [50.2188473167, 7.2170330333, "15"],
  [50.2186481333, 7.2169800667, "17"],
  [50.2184132, 7.2169327333, "19"],
  [50.2202288333, 7.2174746333, "1"],
  [50.218193, 7.2169955667, "21"],
  [50.2178000833, 7.21733275, "25"],
  [50.2176839, 7.2168488333, "26"],
  [50.2198172, 7.2204960667, "5"],
  [50.219986, 7.22049635, "3"],
  [50.2197666, 7.2200825, "4"],
  [50.2193835833, 7.2191669667, "10"],
  [50.2193426333, 7.2198626667, "11"],
  [50.2192171667, 7.2191711, "12"],
  [50.2192621333, 7.2196364167, "13"],
  [50.2195289667, 7.2193943167, "8"],
  [50.21946, 7.2201499167, "9"],
  [50.2196037833, 7.219674, "6"],
  [50.2194712, 7.2204032, "7A"],
  [50.2196381, 7.2203709333, "7"],
  [50.2200137667, 7.2201364333, "2"],
  [50.2191725167, 7.2193772833, "14"],
  [50.2214417333, 7.2256822167, "4"],
  [50.2210291, 7.2259429667, "8"],
  [50.2212328333, 7.2258132, "6"],
  [50.2216819833, 7.2253209, "3"],
  [50.2334697167, 7.2038651667, "326"],
  [50.2322603667, 7.2028621167, "317"],
  [50.2322013667, 7.2046802667, "1/341"],
  [50.2320576167, 7.2165535833, "435"],
  [50.2319540333, 7.20506915, "2/341"],
  [50.2316975667, 7.2053442333, "3/341"],
  [50.2328229833, 7.2062598, "346"],
  [50.23161565, 7.2074915, "355"],
  [50.23219305, 7.20629425, "347"],
  [50.2328549, 7.2080619667, "362"],
  [50.2321289667, 7.2084019333, "367"],
  [50.2322225167, 7.2120427667, "397"],
  [50.2321649, 7.21119325, "393"],
  [50.2321458833, 7.2131246333, "407"],
  [50.2327043833, 7.21377405, "416"],
  [50.2321267167, 7.2144058167, "417"],
  [50.23212555, 7.2096521333, "373"],
  [50.2331028667, 7.20928495, "366"],
  [50.22866875, 7.22177625, "563"],
  [50.2295602, 7.21924335, "582"],
  [50.2304707833, 7.2182986167, "590"],
  [50.23086, 7.2180687667, "592"],
  [50.2328604833, 7.2172892167, "618"],
  [50.2342575667, 7.2168357833, "638"],
  [50.2239713, 7.2245693667, "504"],
  [50.2365260167, 7.2170911, "673"],
  [50.2233928833, 7.2249669167, "492"],
  [50.2248650167, 7.2246300833, "509"],
  [50.2191798333, 7.2265331667, "435"],
  [50.2143243333, 7.2310940167, "368"],
  [50.21459255, 7.2320046, "363"],
  [50.21127515, 7.2356499167, "311"],
  [50.2126359667, 7.2340855167, "333"],
  [50.2096158333, 7.2375218167, "293"],
  [50.2315868667, 7.2177722833, "604"],
  [50.2160177667, 7.2299268333, "391"],
  [50.2204715667, 7.2265481833, "456"],
  [50.2206352, 7.2265670333, "458"],
  [50.2208412667, 7.2265323333, "460"],
  [50.2210184333, 7.22648325, "462"],
  [50.2212643833, 7.2270422167, "465"],
  [50.22119945, 7.2264274333, "464"],
  [50.22136485, 7.2263145667, "466"],
  [50.2215261, 7.22684075, "467"],
  [50.2215301833, 7.2262078, "468"],
  [50.2217701667, 7.2266360167, "1/471"],
  [50.2218376833, 7.22686725, "2/471"],
  [50.2217084667, 7.2260839667, "472"],
  [50.2219782333, 7.2265028333, "475"],
  [50.2218988833, 7.2259723, "476"],
  [50.2223939333, 7.2262447, "479"],
  [50.2223048667, 7.2256582833, "480"],
  [50.2226657, 7.2261230833, "481"],
  [50.2224199, 7.2255487833, "482"],
  [50.2229134167, 7.2259527833, "485"],
  [50.2226937833, 7.2253693167, "486"],
  [50.2231509667, 7.2258170333, "487"],
  [50.22295265, 7.2252571167, "488"],
  [50.2233779, 7.2256743833, "489"],
  [50.2232052667, 7.2251109333, "490"],
  [50.2236200333, 7.22553395, "493"],
  [50.22385775, 7.2253390833, "495"],
  [50.2203220167, 7.22650925, "454"],
  [50.2179795333, 7.2262826, "428"],
  [50.21038215, 7.2365298167, "303"],
  [50.2161746667, 7.2297239833, "393"],
  [50.2083635333, 7.233955, "294"],
  [50.22029495, 7.2214968167, "39"],
  [50.2204754333, 7.2247793333, "12B"],
  [50.2205440833, 7.22344905, "23"],
  [50.2195974333, 7.2254019333, "2"],
  [50.2210801, 7.2237748667, "20A"],
  [50.2209057333, 7.22389775, "18"],
  [50.2208016833, 7.2221582833, "32"],
  [50.2209372667, 7.2236919, "20"],
  [50.2210586833, 7.22351925, "22B"],
  [50.22092905, 7.2234855333, "22"],
  [50.2208587333, 7.2231887667, "24"],
  [50.2210241167, 7.2230882, "24B"],
  [50.2208547833, 7.2229410667, "26"],
  [50.2209917, 7.2228447667, "26B"],
  [50.22097645, 7.2227176167, "28B"],
  [50.2208099167, 7.2226765167, "28"],
  [50.2207666833, 7.2224338833, "30"],
  [50.2209508833, 7.2222094167, "32B"],
  [50.22076515, 7.2219195167, "34A"],
  [50.2207399667, 7.2218131667, "34B"],
  [50.2203075833, 7.2240482833, "19"],
  [50.2205368167, 7.2237746667, "21"],
  [50.2205025833, 7.2231658, "25A"],
  [50.220465, 7.2229733667, "27"],
  [50.22043535, 7.2227387, "29"],
  [50.2204582, 7.2225319667, "31"],
  [50.22024115, 7.2224347833, "31B"],
  [50.2203792333, 7.2222631667, "33"],
  [50.22034095, 7.2219843, "35"],
  [50.2201566167, 7.2219446, "35B"],
  [50.22030575, 7.2217594333, "37"],
  [50.2202966833, 7.2233158167, "25"],
  [50.2192714167, 7.2253842667, "1"],
  [50.21969695, 7.22516645, "4"],
  [50.2194904667, 7.22468815, "5"],
  [50.2198524333, 7.2249096667, "6"],
  [50.2200581833, 7.2247122, "8"],
  [50.2193447, 7.2244639667, "5C"],
  [50.2208238, 7.2241340167, "16"],
  [50.2193183667, 7.22515695, "1A"],
  [50.21940575, 7.2249383333, "3"],
  [50.2211855167, 7.2242545333, "18A"],
  [50.2207094833, 7.22430275, "14"],
  [50.22027725, 7.22488135, "10A"],
  [50.2202305833, 7.2245652667, "10"],
  [50.2205049667, 7.2244201333, "12"],
  [50.2196320333, 7.2255586, "22"],
  [50.2209711, 7.2250444667, "8"],
  [50.22120665, 7.2252942833, "5"],
  [50.2210184, 7.2254290333, "7"],
  [50.2213430333, 7.2252086167, "3"],
  [50.2207887833, 7.2251555667, "10"],
  [50.22060805, 7.2257042333, "13"],
  [50.2208330333, 7.22553905, "9"],
  [50.2216988833, 7.2249665667, "1"],
  [50.2215665833, 7.2246573333, "2"],
  [50.2213729, 7.2247789333, "4"],
  [50.2211700667, 7.2249324333, "6"],
  [50.2205967667, 7.2252867, "12"],
  [50.2204008833, 7.2254234667, "14"],
  [50.22043265, 7.22582195, "15"],
  [50.2202037333, 7.2255415833, "16"],
  [50.2200154333, 7.2256547667, "18"],
  [50.2197443167, 7.2256164833, "20"],
  [50.2202814333, 7.22590955, "17"],
  [50.2202967667, 7.21462555, "98"],
  [50.22204485, 7.21819735, "61B"],
  [50.2224241, 7.2179326667, "61C"],
  [50.2215043167, 7.2227943833, "24"],
  [50.2219082, 7.2255408167, "8"],
  [50.2216963, 7.2240856667, "14"],
  [50.2213418333, 7.2188135667, "55"],
  [50.2204966333, 7.2183406333, "54A"],
  [50.2221799833, 7.21122085, "139"],
  [50.2217387, 7.22431625, "12"],
  [50.2218650167, 7.2149734167, "107"],
  [50.2214083333, 7.2220152667, "30"],
  [50.2213738333, 7.2217301, "32"],
  [50.2221598167, 7.2247839333, "9"],
  [50.2216356, 7.2235610667, "18"],
  [50.2212188167, 7.2221387333, "30B"],
  [50.2200466667, 7.2166111, "84A"],
  [50.2216679333, 7.2238393333, "16"],
  [50.2211582833, 7.22031685, "34"],
  [50.2221918667, 7.2250378333, "7"],
  [50.2187410167, 7.2067290167, "170C"],
  [50.2206532, 7.2170745667, "81"],
  [50.2212348667, 7.2181024167, "67"],
  [50.2213057667, 7.2185351167, "57"],
  [50.2214571, 7.2145877333, "110"],
  [50.22207085, 7.2136727167, "121"],
  [50.22190125, 7.2123493, "130"],
  [50.2207519667, 7.2102467333, "150"],
  [50.2212159, 7.2096407, "159"],
  [50.2208313833, 7.2067756, "172"],
  [50.2214413333, 7.2222779833, "28"],
  [50.2206921333, 7.2182549, "54"],
  [50.22043975, 7.2181215, "56"],
  [50.2218791, 7.2252452167, "10"],
  [50.22029435, 7.2169818, "84"],
  [50.2215885167, 7.22308725, "22"],
  [50.2215897333, 7.2233113167, "20"],
  [50.22167455, 7.2183345, "61A"],
  [50.2217164667, 7.2179857333, "63"],
  [50.22147385, 7.22253565, "26"],
  [50.2206765333, 7.2160304333, "86"],
  [50.2188941, 7.2069437, "170A"],
  [50.2188068333, 7.2068104833, "170B"],
  [50.2193742667, 7.2085580333, "170"],
  [50.2214388167, 7.2200072, "45"],
  [50.2209547167, 7.2157149167, "92"],
  [50.22088565, 7.2164849333, "85"],
  [50.22136235, 7.2159546667, "97"],
  [50.2219607333, 7.2232987, "19"],
  [50.2210501, 7.2179753833, "69"],
  [50.2212466667, 7.2222175833, "28A"],
  [50.2213836167, 7.22300555, "22A"],
  [50.221339, 7.2227439167, "24A"],
  [50.2208144333, 7.2173117167, "77"],
  [50.2189363667, 7.2211582333, "25"],
  [50.2196676167, 7.2209947333, "26B"],
  [50.2194113, 7.2211991, "26"],
  [50.21883205, 7.2209747, "27"],
  [50.2186925833, 7.2207728833, "29"],
  [50.2199931833, 7.2240802167, "2"],
  [50.2191759333, 7.2208279333, "30"],
  [50.21835395, 7.2196571667, "39"],
  [50.2198807333, 7.2235938167, "6"],
  [50.2194567833, 7.22349015, "7"],
  [50.2200507833, 7.21933875, "58"],
  [50.2197902167, 7.2182408, "59A"],
  [50.21991635, 7.21797195, "59B"],
  [50.2198223833, 7.2179361833, "59C"],
  [50.2201049333, 7.2197347167, "60"],
  [50.2199380333, 7.21836645, "61A"],
  [50.22003775, 7.2182443833, "61B"],
  [50.2200944167, 7.21803015, "61C"],
  [50.2201259667, 7.2185610667, "63"],
  [50.22026275, 7.2188001167, "65"],
  [50.2188917833, 7.2203729333, "34"],
  [50.2184921333, 7.2203832, "33"],
  [50.2190387167, 7.2206181333, "32"],
  [50.21968705, 7.2224253667, "16"],
  [50.21981205, 7.223119, "10"],
  [50.2193882833, 7.2229798333, "11"],
  [50.2190901167, 7.2227829833, "13B"],
  [50.2193593, 7.2227247833, "13"],
  [50.21993935, 7.2226893333, "14B"],
  [50.21842725, 7.2201474167, "35"],
  [50.2187965833, 7.2200475333, "36"],
  [50.2183878167, 7.2198735667, "37"],
  [50.2188702167, 7.2196982333, "38B"],
  [50.22027885, 7.2209890667, "82"],
  [50.2199839667, 7.2190668, "56"],
  [50.2187008333, 7.21973745, "38A"],
  [50.2196820167, 7.22262455, "14"],
  [50.2186528333, 7.2191018, "42"],
  [50.2182912167, 7.21915535, "43"],
  [50.21870525, 7.21945675, "40"],
  [50.2195044333, 7.2214081833, "24"],
  [50.21857075, 7.2205925167, "31"],
  [50.2195656167, 7.2181396, "57"],
  [50.2198411667, 7.2213911167, "24A"],
  [50.2195851667, 7.2240869667, "3"],
  [50.2192829167, 7.2239720167, "3A"],
  [50.2193257, 7.2224725667, "15"],
  [50.2197290167, 7.2224129833, "16A"],
  [50.2196499333, 7.2221262667, "18"],
  [50.2196755333, 7.2243193333, "1"],
  [50.2192091667, 7.22166805, "21"],
  [50.21957585, 7.22166585, "22"],
  [50.2199106833, 7.2238436, "4"],
  [50.21953715, 7.22372785, "5A"],
  [50.2193377833, 7.22378105, "5"],
  [50.2189702833, 7.2184597333, "46"],
  [50.2185876167, 7.21821495, "47A"],
  [50.2185706333, 7.2178869167, "47B"],
  [50.2191945667, 7.21845965, "48"],
  [50.2188482167, 7.2176680833, "49"],
  [50.2194043667, 7.21852395, "50"],
  [50.2196233333, 7.2186248333, "52"],
  [50.21920055, 7.2179787167, "53"],
  [50.2198255, 7.2188011167, "54"],
  [50.2205994333, 7.2207248667, "81"],
  [50.2193045333, 7.2222075667, "17"],
  [50.2205621167, 7.2204520167, "79"],
  [50.2180799333, 7.2194407, "41A"],
  [50.2208301833, 7.2206735833, "81A"],
  [50.2202558, 7.2206809333, "80"],
  [50.21941275, 7.21804965, "55"],
  [50.2190239, 7.2179808833, "51"],
  [50.2187854, 7.2180712167, "47"],
  [50.2187476667, 7.2186516333, "44"],
  [50.2182977, 7.21889655, "45"],
  [50.21831675, 7.2194069833, "41"],
  [50.2192735167, 7.2219502167, "19"],
  [50.2196219167, 7.22189825, "20"],
  [50.21962665, 7.2216432667, "22A"],
  [50.2192782833, 7.2209942, "28"],
  [50.2208129833, 7.2209176833, "83A"],
  [50.2206351167, 7.2209705667, "83"],
  [50.2203109333, 7.2212402667, "84"],
  [50.21909575, 7.22139795, "23"],
  [50.2197787167, 7.2228814, "12"],
  [50.2195628333, 7.21791605, "57A"],
  [50.2198373833, 7.2233606833, "8"],
  [50.2194342167, 7.22322975, "9"],
];
