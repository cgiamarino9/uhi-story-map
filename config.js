var config = {
    accessToken: 'pk.eyJ1IjoiY2dpYW1hcmlubyIsImEiOiJjanAyd2hwNWUwYnJ3M3dzMHF4MnJkZ29uIn0.7tLnplw65tLmywvvIPGSKA',
    style: 'mapbox://styles/cgiamarino/ckhvmf901006a19p82obekwxg',
    theme: 'light',
    alignment: 'left',
    toptitle: 'UHI Beach Ecology | Midterm Review | Thick Map',
    title: 'Washed Out: Bordering, Displacement, and Contestation at the Beach',
    byline: 'By Chris Giamarino, Eliza Franklin-Edmondson, Victoria Tran, and Xiuwen Qi',
    description: 'Rayner Banham&#8217;s <a href="https://vimeo.com/22488225" target=”_blank” >infamous trip</a> through Los Angeles&#8217; original four ecologies—Surfurbia, Foothills, The Plains of Id, and Autopia—contained some superficial claims. While <i>driving</i> through Surfurbia, or the beach ecology, Banham (1971, p. 39) claimed that &quot;the beach is the only place in Los Angeles where all men are equal and on common ground&quot;. This storymap problematizes this argument by looking at struggles for spatial justice in the face of bordering and displacement starting with mid-century urban renewal and ending in today&#8217;s political climate with widespread social unrest and varying demands for reparations and rights to the city.</br></br> The journey begins as we make our way from north Santa Monica Bay in Malibu to south Santa Monica Bay in Manhattan Beach. The four places where we explore processes of bordering, commoning, and undecommoning are Malibu, Santa Monica, Venice, and Manhattan Beach. We respatialize real-and-imagined spaces that have been erased and reclaimed. These places include Inkwell Beach, Bruce&#8217;s Beach, sidewalks for shelter and survival, and the beach itself.',
    footer: 'Two acknowledgments are necessary. First, thank you to Grga Basic, Marguerite Holloway, Michael Krisch, and Juan Francisco Saldarriaga at <a href="https://pointsunknown.nyc/" target=”_blank”>Points Unknown</a> for their Mapbox Story Map tutorial. Second, thank you to <a href="https://www.getbounds.com/" target=”_blank”>Malcolm Meyer</a> for their technical assistance with coding issues.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    chapters: [
        {
            id: 'beach-line',
            title: 'The Beach Ecology stretches from Malibu to Newport Beach.',
            image: 'images/collage.png',
            imageCredit: 'Chris Giamarino',
            description: 'We look at Santa Monica, Manhattan Beach, Venice, and Malibu. All four location&#8217;s histories are fraught with planned social, cultural, and spatial exclusion, as well as radical contestations.',
            location: {
                center: [-118.65301, 33.95435  ],
                zoom: 10.59,
                pitch: 3,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'coast',
                opacity: .7
              },
              {
                layer:'beach-locations',
                opacity:.6
              },
              {
                layer: 'trailMalibu',
                opacity: 0
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'beach-locations',
                opacity: 0
              },
              {
                layer: 'coast',
                opacity: 0
              }
            ]
        },
        {
            id: 'enterMalibu',
            title: 'Greetings from California',
            image: 'images/greetings.jpg',
            imageCredit: '<a href="https://pepperdine.contentdm.oclc.org/digital/collection/p15730coll18/id/993" target=”_blank”>Eric Wienberg Collection of Malibu Matchbooks, Postcards, and Collectables</a>',
            description: 'Postwar real estate advertisements used beach entertainment, music, and surf imagery from Malibu to market the appeal of Los Angeles. To market to prospective white upper-middle class residents, <a href="https://pepperdine.contentdm.oclc.org/digital/api/singleitem/image/p15730coll18/117/default.jpg?highlightTerms=" target=”_blank”>white surfers</a> are referenced in ads, while the sounds of the Beach Boys are associated with Malibu during a classic photoshoot at Paradise Cove for their first album.',
            video: '<iframe width="350" height="210" src="https://www.youtube.com/embed/hJY88w2Rz9E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [ -118.69160, 34.03535  ],
                zoom:15.66,
                pitch: 60,
                bearing: 73.60
            },
            onChapterEnter: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: '10-fwy',
                opacity: 0
              }
            ]
        },
        {
            id:'incMalibu',
            title: 'Malibu Beach, an exclusive beach enclave',
            image:'images/legends-3.png',
            imageCredit: '<a href="https://data.lacounty.gov/" target="_blank">County of Los Angeles Open Data</a>',
            description: 'Malibu is an expensive beach enclave.',
            location: {
              center: [-118.87619, 34.03132 ],
              zoom: 10.4,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter:[
              {
                layer:'medIncMali',
                opacity: 1
              }
            ],
            onChapterExit:[
              {
                layer:'medIncMali',
                opacity:0
              }
            ]
        },
        {
            id:'fireMalibu',
            title: 'Woolsey Fire',
            image:'images/fire.jpg',
            imageCredit: '<a href="https://www.kcrw.com/news/shows/greater-la/a-pending-rule-change-for-airbnb-and-other-short-term-rentals-in-la/which-malibu-restaurants-didnt-survive-the-woolsey-fire" target=”_blank”>Peter Buschmann</a>',
            description: 'The 2018 Woolsey Fire burned over 90,000 acres and put over 10,000 building structures in Malibu at risk of destruction. While similar urban fires happen in lower areas with less wealth such as the Westlake neighborhood in LA, Malibu residents continue to receive &ldquo;cheap fire insurance, socialized disaster relief, and an expansive public commitment to &lsquo;defend Malibu&rsquo;&rdquo; (<a href="https://longreads.com/2018/12/04/the-case-for-letting-malibu-burn/" target=”_blank”>Davis, 1998)</a>.',
            video: '<audio src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Campfire_sound_ambience.ogg" type="audio/mpeg"  title="wildfire crackling" controls ></audio>',
            location: {
              center: [-118.93630,  34.08291],
              zoom: 10.5,
              pitch: 0,
              bearing: 0
            },
            onChapterEnter:[
              {
                layer:'bldgsMali',
                opacity: 1
              },
              {
                layer:'woolsFire',
                opacity:0.7
              }
            ],
            onChapterExit:[
              {
                layer:'bldgsMali',
                opacity: 0
              },
              {
                layer:'woolsFire',
                opacity:0
              }
            ]
        },
        {
            id: 'malibuBeach',
            title: 'Re-opening the Beaches of Malibu',
            image: 'images/tortilla.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'The <a href="http://laurbanrangers.org/site/" target=”_blank” target=”_blank”>Los Angeles Urban Rangers</a> attempt to make the exclusive beaches of Malibu more open through maps off access points along PCH that they offer in <a href="http://laurbanrangers.org/site/sites/default/files/tools/Malibu%20Public%20Beaches%20Guide_ENG%20012810_web.pdf" target=”_blank”> English</a> and <a href="http://laurbanrangers.org/site/sites/default/files/tools/Malibu%20Public%20Beaches%20Guide_SP%20012810_web.pdf" target=”_blank”>Spanish</a>. T.C. Boyle&#8217;s magnum opus <a href="https://www.latimes.com/archives/la-xpm-1995-09-24-bk-49277-story.html" target=”_blank”><i>The Tortilla Curtain</i></a> tells a different story of Malibu where access to the beach is a way that undocumented immigrants Cándido Rincón and América can survive the expensive, exclusionary, and xenophobic environment while they work for wealthy property owners who exacerbate their exclusion. This literary tome is a critique, meditation, and response to the anti-immigrant Prop 187 passed in 1994, which was <a href="https://www.aclu.org/press-releases/cas-anti-immigrant-proposition-187-voided-ending-states-five-year-battle-aclu-rights" target=”_blank”>repealed</a> in 1999.',
            video: '',
            location: {
                center: [-118.84635, 34.01386 ],
                zoom: 10.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                },
                {
                  layer: 'trail',
                  opacity: 0.8
                }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              },
              {
                layer: 'trail',
                opacity: 0
              }
            ]
        },
        {
            id: 'freeway',
            title: 'The 10 Freeway Makes its Way to the Beach, 1964',
            image: 'images/10-fwy.jpg',
            imageCredit: '<a href="https://www.library.ucla.edu/location/research-library-charles-e-young" target=”_blank”>UCLA Charles E. Young Research Library Department of Special Collections</a>',
            description: 'Postwar urban renewal was racialized, anti-working class, and homophobic. Highways tore through working class communities of color in mid-century America. They remain <a href="https://archinect.com/news/article/150204203/highways-another-enduring-monument-to-american-racism" target=”_blank”>monumental racist infrastructural artefacts</a> that should be torn down. Before its completion, beach cities, white residents, and local policymakers used federal funds, urban design, restrictive covenants, and spatial regulations to clear out unwanted residents <i>and</i> everyday activities that one may assume belong at the beach...',
            location: {
                center: [ -118.40095, 34.00997  ],
                zoom: 12.62,
                pitch: 60,
                bearing: -128
            },
            onChapterEnter: [
              {
                layer: '10-fwy',
                opacity: .6
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: '10-fwy',
                opacity: 0
              }
            ]
        },
        {
            id: 'blackPop',
            title: 'A highway through Pico, a historic black beach community',
            image: 'images/legend-1.png',
            imageCredit: '<a href="https://www.socialexplorer.com/explore-maps" target=”_blank”>Social Explorer</a> + <a href="https://www.nhgis.org/" target=”_blank”>IPUMS National Historical Geographic Information System, 2020</a>',
            description: '',
            video: '',
            location: {
                center: [-118.48749, 34.04236],
                zoom: 12.5,
                pitch: 0,
                bearing: 46.40
            },
            onChapterEnter: [
                {
                    layer: 'CT-1970-beach',
                    opacity: 1
                },
                {
                  layer: '10-fwy',
                  opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'CT-1970-beach',
                    opacity: 0
                },
                {
                  layer: '10-fwy',
                  opacity: 0
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ]
        },
        {
            id: 'today',
            title: 'The Impacts of Urban Renewal, Redlining, and Racism Today',
            image: 'images/legend-2.png',
            imageCredit: '<a href="https://www.socialexplorer.com/explore-maps" target=”_blank”>Social Explorer</a>',
            description: 'Looking at the percentages from American Community Survey 2018 5-year data, the presence of African American/black communities since 1970 has dwindled and become more disparately dispersed in the Pico neighborhood of Santa Monica. Santa Monica is now part of the exclusive <a href="https://www.discoverlosangeles.com/the-rise-of-silicon-beach" target=”_blank”> Silicon Beach</a> area of Los Angeles. <a href="https://www.rentcafe.com/average-rent-market-trends/us/ca/santa-monica/" target=”_blank”>Average rent</a> is $3,200 and working class communities bear the brunt of these exorbitant rent hikes.',
            video: '<iframe width="350" height="210" src="https://www.youtube.com/embed/pmjp9SjlVuo" frameborder="0"  allowfullscreen></iframe>',
            location: {
                center: [-118.48749, 34.04236],
                zoom: 12.5,
                pitch: 0,
                bearing: 46.40
            },
            onChapterEnter: [
                {
                    layer: 'ct-2018-pico',
                    opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'ct-2018-pico',
                    opacity: 0
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ]
        },
        {
            id: 'muscleBeach',
            title: 'The Original Muscle Beach closes in 1959',
            image: 'images/muscle.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'The Original Muscle Beach was located at the foot of the Santa Monica Pier. During urban renewal in the 1950s, city officials and businesses shut down the space <a href="https://www.kcet.org/shows/lost-la/how-muscle-beach-started-in-santa-monica-but-ended-up-in-venice" target="_blank" title="Opens in a new window"> to cater to white suburban middle class tastes.</a> The city saw it as an &#8220;immoral place&#8221; attractive to &#8220;hippies&#8221;, &#8220;sexual athletes&#8221;, and &#8220;queers.&#8221; Muscle Beach migrated two miles south following the Venice countercultural movement in the 1960s and 1970s. Today, the original location is an abandoned ghost gym.',
            video: '',
            location: {
                center: [-118.49568, 34.00991],
                zoom: 16.97,
                pitch: 0,
                bearing: 44.8
            },
            onChapterEnter: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'inkwellBeach',
            title: 'Inkwell, a historically black beach in Santa Monica',
            image: 'images/inkwell.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'Inkwell was a <a href="https://www.jstor.org/stable/41172469?seq=1#metadata_info_tab_contents" target=”_blank”>historic black beach</a> until the 1960s when the city of Santa Monica implemented regulations and zones of exclusion that targeted black beach goers and exacerbated racial segregation. Urban renewal, segregation, and homogenization ensured that the city would realize its aspirations to be an affluent beach resort that catered to white, wealthy suburbanites.',
            video: '<iframe width="350" height="210" src="https://www.youtube.com/embed/9l7ukZw86kg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-118.49275, 34.00554],
                zoom: 16.93,
                pitch: 41,
                bearing: 34.40
            },
            onChapterEnter: [
                {
                    layer: 'inkwell',
                    opacity: 1
                },
                {
                    layer: 'seczBeach',
                    opacity: 0
                },
                {
                    layer: 'bidBeach',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'inkwell',
                    opacity: 0
                }
            ]
        },
        {
            id: 'veniceBeach',
            title: 'Venice Beach, fighting for a right to dwell and survive in the city.',
            image: 'images/secz.jpg',
            imageCredit: 'Chris Giamarino',
            description: 'Processes of spatial exclusion have evolved from excluding communities of color and countercultures to targeting the unhoused status of beach residents who require common space to live, sleep, and perform other biologically-necessary duties. Due to its favorable climate and plethora of public space, Venice Beach has a sizable unhoused population. Today, the Venice Business/<a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3221446" target=”_blank”>Exclusion</a> Improvement District (purple boundary) and a Special Enforcement Zone (pink boundary) around a temporary shelter have produced a punitive public space environment that subjects the unhoused to police harassment, spatial banishment, and personal dispossession. Activist groups like Street Watch LA prevent police sweeps of encampments from happening through spatial occupation. During COVID-19, they have even occupied digital spaces to <a href="https://twitter.com/StreetWatchLA/status/1324578001716047872" target=”_blank”> shut down</a> a vote to resume policing of the unhoused by the Venice Neighborhood Council.',
            video: '<iframe width="350" height="210" src="https://www.youtube.com/embed/t8ha3RxuTMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-118.47358, 34.00988],
                zoom: 13.21,
                pitch: 0,
                bearing: 68
            },
            onChapterEnter: [
                {
                    layer: 'seczBeach',
                    opacity: .7
                },
                {
                    layer: 'bidBeach',
                    opacity: .7
                }
            ],
            onChapterExit: [
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        },
        {
            id: 'bruceBeach',
            title: 'A black-owned beach with a tumultuous past and emancipatory present.',
            image: 'images/bruce.jpg',
            imageCredit: '<a href="https://www.latimes.com/california/story/2020-08-02/bruces-beach-manhattan-beach" target=”_blank”>Jay L. Clendenin</a>',
            description: 'Bruce&#8217;s Beach was an African American beach resort that provided an accessible oceanside refuge in the face of racial segregation. During Jim Crow, <a href="https://spectrumnews1.com/ca/la-west/human-interest/2020/07/31/reflections-on-race--bruce-s-beach--then-and-now" target="_blank" title="Opens in a new window">racial terrorism and eminent domain</a> seized the parkland and excluded African Americans from the space. With recent uprisings against police brutality and racial injustice, this site is now a battleground for restitution, reparations, and occupation as evidenced by the recent <a href="https://www.nytimes.com/2020/06/19/us/ca-juneteenth-celebration.html" target=”_blank”>Juneteenth celebration.</a>',
            video: '<iframe width="350" height="210" src="https://www.youtube.com/embed/dzVmdjExc6E" frameborder="0" allowfullscreen></iframe>',
            location: {
                center: [-118.41679, 33.89541],
                zoom: 16.70,
                pitch: 0,
                bearing: 68
            },
            onChapterEnter: [
              {
                layer:'bruceBeach',
                opacity:1
              }
            ],
            onChapterExit: [
              {
                layer:'bruceBeach',
                opacity:0
              }
            ]
        },
        {
            id: 'beach-line',
            title: 'The Right to the Beach Ecology.',
            image: 'images/collage.png',
            imageCredit: 'Chris Giamarino',
            description: 'The beach ecology is an ongoing site of commoning and undercommoning contesting both historical and contemporary processes of bordering. Thank you for taking this alternative journey through the beach ecology of Los Angeles.',
            location: {
                center: [-118.65301, 33.95435  ],
                zoom: 10.59,
                pitch: 3,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'coast',
                opacity: .7
              },
              {
                layer:'beach-locations',
                opacity:.7
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'beach-locations',
                opacity: 0
              },
              {
                  layer: 'seczBeach',
                  opacity: 0
              },
              {
                  layer: 'bidBeach',
                  opacity: 0
              }
            ]
        }
    ]
};
