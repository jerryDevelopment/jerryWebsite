import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      navigation: {
        menuLinks: {
          jerryDigital: 'Jerry Digital',
          jerryConsulting: 'Jerry Consulting',
          showCases: 'Show Cases',
        },
        socialLinks: {
          facebook: 'https://www.facebook.com/wirsindjerry/',
          instagram: 'https://www.instagram.com/wirsindjerry/',
          linkedIn: 'https://de.linkedin.com/company/wir-sind-jerry-gmbh/'
        },
        de: {
          menuLinks: {
            about: 'Über uns',
            whoJerry: 'Wer',
            whyJerry: 'Warum',
            howJerry: 'Wie',
            whatJerry: 'Was',
            whoJerryDigital: 'Wer',
            whyJerryDigital: 'Warum',
            howJerryDigital: 'Wie',
            whatJerryDigital: 'Was',
            references: 'Referenzen',
            contact: 'Kontakt'
          },
          imprintLinkText: 'Impressum',
          privacyPolicyLinkText: 'Datenschutzerklärung',
          cookiesButtonText: 'Cookie Einstellungen'
        },
        en: {
          menuLinks: {
            about: 'About us',
            whoJerry: 'Who',
            whyJerry: 'Why',
            howJerry: 'How',
            whatJerry: 'What',
            whoJerryDigital: 'Who',
            whyJerryDigital: 'Why',
            howJerryDigital: 'How',
            whatJerryDigital: 'What',
            references: 'References',
            contact: 'Contact'
          },
          imprintLinkText: 'Disclaimer',
          privacyPolicyLinkText: 'Pivacy Policy',
          cookiesButtonText: 'Cookie Settings'
        }
      },
      splitScreen: {
        de: {
          welcomeMessage: 'hallo, wir sind',
          leftTagLine: 'sports business<br>consultants',
          leftText: 'Wir liefern <span class="c-yellow">Strategien</span><br>in Zeiten der Veränderung.',
          leftTextScrollDownButton: 'sports business consultants',
          rightTagLine: 'sports business<br>solutions',
          rightText: 'Wir liefern digitale <span class="c-blue">Lösungen</span><br>in Zeiten der Veränderung.',
          rightTextScrollDownButton: 'sports business solutions'
        },
        en: {
          welcomeMessage: 'hi, we are',
          leftTagLine: 'sports business<br>consultants',
          leftText: 'We deliver <span class="c-yellow">strategies</span><br>in times of change.',
          leftTextScrollDownButton: 'sports business consultants',
          rightTagLine: 'sports business<br>solutions',
          rightText: 'We deliver digital <span class="c-blue">solutions</span><br>in times of change.',
          rightTextScrollDownButton: 'sports business solutions'
        }
      },
      contact: {
        partners: [
          {
            name: 'Thomas Wagner',
            phone: '+49 171 99 101 01',
            email: 'thomas@wirsindjerry.de',
            img: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_375/v1594900006/jerry-website-assets/portrait_thomas_600x600_muy7gl.png',
            vcf: 'thomas-wagner.vcf',
          }, {
            name: 'Karsten Streng',
            phone: '+49 172 89 888 44',
            email: 'karsten@wirsindjerry.de',
            img: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_375/v1594900006/jerry-website-assets/portrait_karsten_600x600_v5yusf.png',
            vcf: 'karsten-streng.vcf',
          }, {
            name: 'Dieter Thoma',
            phone: '+49 89 558 989 58',
            email: 'dieter@wirsindjerry.de',
            img: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_375/v1594900007/jerry-website-assets/portrait_dieter_600x600_weq8kp.png',
            vcf: 'dieter-thoma.vcf',
          }
        ],
        companyName: 'Wir sind Jerry GmbH',
        address: {
          street: 'Liebherrstraße 5',
          city: '80538 München',
          phone: '+49 89 558 989 58',
          email: 'hallo@wirsindjerry.de',
          gmapLink: 'https://goo.gl/maps/gavnXC8gCTrs4Zxz9'
        },
        de: {
          headline: 'Kontakt',
          downloadButtonText: 'Kontakt<br>herunterladen',
          followUsText: 'folge uns:'
        },
        en: {
          headline: 'Contact',
          downloadButtonText: 'download<br>contact',
          followUsText: 'follow us:'
        }
      },
      frontPage: {
        imgPartner: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_gruppenbild_2400x1400px_otjxpj.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_gruppenbild_2400x1400px_otjxpj.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900003/jerry-website-assets/jerry_gruppenbild_2400x1400px_otjxpj.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900003/jerry-website-assets/jerry_gruppenbild_2400x1400px_otjxpj.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900003/jerry-website-assets/jerry_gruppenbild_mobil_1950x1400px_myqsai.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900003/jerry-website-assets/jerry_gruppenbild_mobil_1950x1400px_myqsai.jpg',
        },
        imgWhyJerry: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900002/jerry-website-assets/jerry_fernseher_2400x1400px_a3jxoo.jpg',
        },
        imgHowJerry1: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900004/jerry-website-assets/jerry_how_01_2400x1350px_hhsgda.jpg',
        },
        imgHowJerry2: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900003/jerry-website-assets/jerry_how_02_2400x1350px_xykvjt.jpg',
        },
        imgHowJerry3: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900004/jerry-website-assets/jerry_how_03_2400x1350px_lhbda6.jpg',
        },
        pictogramHowJerry: 'infografik_jerry_prozess.svg',
        imgWhatJerry: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900003/jerry-website-assets/jerry_fussball_2400x1400px_hoh3pb.jpg',
        },
        imgWhatReport: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900005/jerry-website-assets/jerry_jerryreport_g6fob9.png',
        },
        imgWhatDigital: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900005/jerry-website-assets/jerry_jerrydigital_teaser_2880x1250px_dogvh5.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900005/jerry-website-assets/jerry_jerrydigital_teaser_2880x1250px_dogvh5.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900005/jerry-website-assets/jerry_jerrydigital_teaser_2880x1250px_dogvh5.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595342494/jerry-website-assets/jerry_jerrydigital_teaser_1960px_mfglnj.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595342494/jerry-website-assets/jerry_jerrydigital_teaser_1960px_mfglnj.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900004/jerry-website-assets/jerry_jerrydigital_teaser_mobil_1440x1440px_ohhyci.jpg',
        },
        referencesLogos: [
          'logo_mercedesbenz.svg',
          'logo_goretex.svg',
          'logo_stada.svg',
          'logo_deutschetelekom.svg',
          'logo_vflwolfsburg.svg',
          'logo_avia.svg',
          'logo_dfb.svg',
          'logo_dtm.svg',
          'logo_bmw.svg',
          'logo_bewegdichschlau.svg',
        ],
        referencesLogoEsb: 'logo_esb.svg',
        de: {
          meta: {
            title: 'Jerry | Deine persönlichen Sports Business Berater',
            description: 'Jerry ist Dein Change Begleiter im Sport-Business - von der Strategie über personelle Erweiterung bis hin zur Kooperationsakquise.'
          },
          partners: {
            list: [
              { 
                name: 'Karsten Streng',
                list: [
                  'verfügt über 20 Jahre Erfahrung im Sport Marketing',
                  'vereint Kommunikations- und Management-Know-how',
                  'berät Unternehmen, Persönlichkeiten und Agenturen',
                  'ist fokussiert auf vertrauensvolle und klare Markenführung',
                  'entwickelt kommunikative Strategien und Konzepte',
                  'ist fest verankert in der Motorsport-, Ausdauersport- & Golfszene',
                ]
              }, {
                name: 'Thomas Wagner',
                list: [
                  'arbeitet seit mehr als 15 Jahren im Sport Business',
                  'analysiert scharfsinnig mit Blick auf das Wesentliche',
                  'legt höchsten Wert auf Effektivität und Effizienz',
                  'konzipiert, plant und setzt erfolgreich um',
                  'denkt und handelt mit dem Blick eines Unternehmers',
                  'kennt alle Perspektiven im Fußball-Umfeld',
                ]
              }, {
                name: 'Dieter Thoma',
                list: [
                  'war 15 Jahre erfolgreicher Hochleistungssportler',
                  'ist seit dem Jahr 2000 TV-Experte für Wintersport',
                  'ist seit über 30 Jahren Unternehmer im Sport- und Medien Business',
                  'überzeugt als visionärer Berater und provokanter Querdenker',
                  'setzt die Werte des Sports immer an die erste Stelle',
                  'kaum jemand ist im Wintersport und Golf besser vernetzt als er',
                ]
              }
            ],
            contactLinkText: 'Kontakt'
          },
          whyJerry: {
            sectionIntro: {
              headline: 'Warum Jerry?',
              text: [
                'Wir wollen das Sportbusiness aufmischen und einen <span class="c-yellow">Gegenpol zu klassischen Agenturen schaffen.</span>',
                'Genau deshalb gibt es Jerry. Jerry ist ein Typ, der Ihnen auf Augenhöhe begegnet, der kritisch hinterfragt und gemeinsam <span class="c-yellow">mit Ihnen neue Wege geht.</span>',
              ]
            },
            sectionTrueStory: {
              headline: 'Eine wahre Geschichte, die uns inspiriert hat.',
              text: '1996 kam der Blockbuster „Jerry Maguire – Spiel des Lebens“ in die Kinos. In diesem spielt Tom Cruise den Sportmanager Jerry Maguire. Dieser vermisst Ehrlichkeit und Menschlichkeit in seiner Branche. Als er dies offen anprangert, verliert er seinen Job in einer großen Sportmangement Agentur und Jerry startet in das Abenteuer der Selbständigkeit. Er steht zu seinen Überzeugungen und macht alles anders – freundschaftlich, menschlich und sehr persönlich. Daran glauben auch wir und nennen uns deswegen stolz Jerry.'
            },
            sectionAssets: {
              headline: 'Genau wie Jerry, sind wir der verlässliche Partner in Zeiten der Veränderung.',
              list: [
                {
                  img: 'icon_jerry_why_01.svg',
                  text: 'Wir haben den Sport in all seinen Facetten auf höchstem Niveau erlebt. Dabei mussten wir uns selbst permanent auf neue Herausforderungen einstellen.'
                }, {
                  img: 'icon_jerry_why_02.svg',
                  text: 'Wir treten nicht mit dem Team an, das wir haben, sondern mit dem, das gebraucht wird.'
                }, {
                  img: 'icon_jerry_why_03.svg',
                  text: 'Wir leben die Digitale Transformation im Sport und sind mit <a href="/digital" class="c-blue">Jerry Digital</a> entsprechend aufgestellt.'
                }
              ]
            }
          },
          howJerry: {
            headline: 'Wie arbeitet Jerry?',
            subline: 'Bei allem, was wir tun, folgen wir unseren <span class="c-yellow">7 Prinzipien:</span>',
            list: [
              {
                headline: 'Persönlich',
                text: 'Wir sind zu jeder Zeit für Dich da und begleiten den gesamten Prozess ganzheitlich und persönlich.'
              }, {
                headline: 'Lösungsorientiert',
                text: 'Wir handeln agil und zielgerichtet. Deshalb stellen wir für jede Herausforderung ein Team mit erforderlichen Spezialisten zusammen.'
              }, {
                headline: 'Unternehmerisch',
                text: 'Wir denken in skalierbaren Modellen und Produkten – aufgeladen durch die emotionale Strahlkraft des Sports.'
              }, {
                headline: 'Verbindend',
                text: 'Wir glauben an die Kraft der Beziehung. Wir schaffen und stärken Verbindungen zu Partnern, Kunden und Mitarbeitern.'
              }, {
                headline: 'Mutig',
                text: 'Wir gehen neue Wege. Nur wer mutig ist, wird seine Kunden, Partner und Mitarbeiter nachhaltig ansprechen, begeistern und binden.'
              }, {
                headline: 'Sportlich',
                text: 'Die Werte des Sports ziehen sich durch unsere Haltung, Strategien und Lösungen.'
              }, {
                headline: 'Strukturiert',
                text: 'Wir folgen einem klaren „Trainingsplan“.'
              },
            ]
          },
          whatJerry: {
            sectionIntro: {
              headline: 'Was macht Jerry?',
              text1: [
                'Jerry bildet, stärkt und pflegt Beziehungen auf Grundlage der emotionalen <span class="c-yellow">Strahlkraft des Sports.</span>',
                '<span class="c-yellow">Beziehungen</span> zwischen Marke und Mensch, Unternehmen und Mitarbeitern, zwischen Projektpartnern, zwischen Euch und uns.',
              ],
              text2: [
                'Auf dieser Basis schauen wir nach vorne und helfen Dir, Dein Sport-Business so auszurichten, die <span class="c-yellow">Herausforderungen der Zukunft</span> zu <span class="c-yellow">meistern.</span>',
                'Vom Strategie-Papier über personelle Team-Erweiterung bis hin zu konkreten Kooperationen begleiten wir Dich durch die Zeit der Veränderung und darüber hinaus.',
              ]
            },
            sectionResults: {
              headline: 'Welche Ergebnisse liefert mir Jerry?',
              list: [
                {
                  img: 'icon_jerry_leistungen_01.svg',
                  title: 'Analyse- & Steuerungstools',
                  text: 'Die Anforderungen an Sport Business Kooperationen steigen stetig und sind zunehmend geprägt von vertrieblichen, strategischen, politischen und gesellschaftlichen Einflüssen, die von Unternehmen zu Unternehmen variieren. Wir analysieren ihr Unternehmen und geben Ihnen individuell für Sie ausgearbeitete Tools an die Hand, die Ihnen helfen zielgerichtet und faktenbasiert Entscheidungen zu treffen.',
                }, {
                  img: 'icon_jerry_leistungen_02.svg',
                  title: 'Strategie- und Handlungsempfehlung',
                  text: 'Wir glauben an die Strahlkraft des Sports als Katalysator für eine erfolgreiche Unternehmensentwicklung. Dieses übergeordnete Ziel bildet die Basis für authentische Strategien und Handlungsempfehlungen, die wir maßgeschneidert für unsere Partner entwickeln.',
                }, {
                  img: 'icon_jerry_leistungen_03.svg',
                  title: 'Umsetzungs- und Aktivierungssteuerung',
                  text: 'Eine zielgerichtete Auswahl und Umsetzung von Aktivierungsmaßnahmen entscheidet über die Wirksamkeit einer Strategie. Jerry weiß, was in welchem Umfeld funktioniert und worauf es bei der Zielgruppenansprache ankommt. Auf dieser Basis unterstützen wir die Steuerung und helfen Ihnen, Ihr Projekt effektiv und effizient umzusetzen.',

                }, {
                  img: 'icon_jerry_leistungen_04.svg',
                  title: 'Rechtebewertung & Verhandlungsunterstützung',
                  text: 'Ein Recht ist immer soviel Wert, wie man bereit ist, dafür zu bezahlen. Wir kennen nicht nur die „marktüblichen Preise“ sondern stellen diese immer in Relation zu den Bedürfnissen unserer Kooperationspartner. Wir geben klare Bewertungen ab, stellen individuelle Alternativen vor und begleiten argumentativ alle Vertragsverhandlungen.',

                }, {
                  img: 'icon_jerry_leistungen_05.svg',
                  title: 'Personaldienstleistung',
                  text: 'Insbesondere in Zeiten der Veränderung oder im Rahmen projektbezogener Herausforderungen ist eine agile und spezialisierte Teambesetzung gefragt. Je nach Rahmenbedingungen stellen wir unseren Partnern die notwendigen Spezialisten in flexiblen Beschäftigungsmodellen zur Seite.',

                }, {
                  img: 'icon_jerry_leistungen_06.svg',
                  title: 'Kooperationsberatung, -akquise und Betreuung',
                  text: 'Wir glauben an die Kraft der Kooperation. Auf dieser Basis initiieren und pflegen wir Beziehungen zwischen Unternehmen und Marken. Von der Auswahl adäquater Kooperationspartner, über die Verknüpfung der entsprechenden Personen bis hin zur inhaltlichen Gestaltung und Betreuung begleiten wir den gesamten kooperativen Prozess.',

                }
              ]
            },
            sectionReport: {
              headline: 'Der Jerry Report',
              text: [
                'Jerry versteht sich als Partner und Berater von Entscheidungsträgern. Unsere Ergebnisse sind maßgeschneidert und faktenbasiert. Sie sollen stets <span class="c-yellow">nachvollziehbar und transparent als Entscheidungshilfe</span> dienen.',
                'Daher stellen wir allen unseren Partnern die Ergebnisse unserer Arbeit komprimiert, nachvollziehbar, aufbereitet und präsentierbar in Form unseres „Jerry Reports“ zusammen.',
              ]
            },
            sectionDigital: {
              headline: 'Der Partner für’s Digitale.',
              text: [
                'Sämtliche Strategien und Lösungen müssen digital mitgedacht und umgesetzt werden Deshalb gibt es <a href="/digital" class="c-blue">Jerry Digital.</a>',
                'Dabei bündeln wir das Know-how zahlreicher Experten, sind ganz nah dran an den neuesten digitalen Entwicklungen und Trends und verstehen es mit schlanken Projektaufstellungen begeisternde Erlebnisse zu schaffen.',
              ]
            },
          },
          references: {
            sectionIntro: {
              headline: 'Referenzen',
              text: [
                'Jerry arbeitet für namhafte Unternehmen und Persönlichkeiten in unterschiedlichen Bereichen von Wirtschaft und Sport.',
                'Wir bauen Brücken zwischen diesen beiden Welten und verstehen das Vertrauen, das unsere Partner in uns legen als unser höchstes Gut.',
              ]
            },
          }
        },
        en: {
          meta: {
            title: 'Jerry | Your personal Sports Business Consultants',
            description: 'Jerry is your change consultant in sports business - from strategy and personnel expansion to cooperation acquisition.'
          },
          partners: {
            list: [
              { 
                name: 'Karsten Streng',
                list: [
                  'has over 20 years’ experience in sports marketing',
                  'combines communication and management expertise',
                  'advises companies, sports personalities and agencies',
                  'specializes in clear brand management with an emphasis on trust',
                  'develops communications strategies and concepts',
                  'is deeply embedded in the motorsports, endurance sports and golf scene',
                ]
              }, {
                name: 'Thomas Wagner',
                list: [
                  'working in the sports business for over 15 years',
                  'a shrewd analyst with a keen sense of what’s essential',
                  'places the greatest value on effectiveness and efficiency',
                  'designs, plans and successfully implements strategies',
                  'thinks and acts with an entrepreneurial mindset',
                  'knows every aspect of the football world',
                ]
              }, {
                name: 'Dieter Thoma',
                list: [
                  'competed as a top-level ski jumper for 15 years',
                  'working as a winter sports analyst for TV since the year 2000',
                  'has over 30 years’ experience as an entrepreneur in the sports and media business',
                  'wins people over as a visionary consultant and a maverick thinker',
                  'always puts sporting values first',
                  'has an almost unrivalled network in winter sports and golf',
                ]
              }
            ],
            contactLinkText: 'Contact'
          },
          whyJerry: {
            sectionIntro: {
              headline: 'Why Jerry?',
              text: [
                'We want to stir up the sports business and <span class="c-yellow">create a radical alternative to conventional agencies.</span>',
                'That’s Jerry’s raison d’être. Jerry is someone who sees you as a partner, who asks critical questions and who will <span class="c-yellow">take you down new paths.</span>',
              ]
            },
            sectionTrueStory: {
              headline: 'The true story that inspired us.',
              text: 'In 1996 the blockbuster film Jerry Maguire hit the cinemas. It’s based on the life story of sports agent Leigh Steinberg, played in the film by Tom Cruise in the role of Jerry Maguire. Jerry is at odds with the lack of honesty and humanity in his industry. When he goes public with his criticism, he is fired from a major sports management agency and embarks on an independent career. He lives by his convictions and adopts an entirely new approach – friendly, human and very personal.We believe in doing business this way too, which is why we proudly call ourselves Jerry.'
            },
            sectionAssets: {
              headline: 'Just like Jerry, we are the reliable partner in times of change.',
              list: [
                {
                  img: 'icon_jerry_why_01.svg',
                  text: 'We have experienced the sport in all its facets at the highest level. In doing so, we had to constantly adapt to new challenges.'
                }, {
                  img: 'icon_jerry_why_02.svg',
                  text: 'We do not compete with the team we have, but with the team that is needed.'
                }, {
                  img: 'icon_jerry_why_03.svg',
                  text: 'We live the digital transformation in sports and with <a href="/en/digital" class="c-blue">Jerry Digital</a> we are positioned accordingly.'
                }
              ]
            }
          },
          howJerry: {
            headline: 'How does Jerry work?',
            subline: 'In everything we do, we follow our <span class="c-yellow">7 principles:</span>',
            list: [
              {
                headline: 'Personal',
                text: 'We are there for you at any time and accompany the entire process holistically and personally.'
              }, {
                headline: 'Solution-oriented',
                text: 'We act agile and goal-oriented. That is why we put together a team with the necessary specialists for every challenge.'
              }, {
                headline: 'Entrepreneurial',
                text: 'We think in scalable models and products - charged by the emotional radiance of sport.'
              }, {
                headline: 'Connecting',
                text: 'We believe in the power of the relationship. We create and strengthen connections to partners, customers and employees.'
              }, {
                headline: 'Courageous',
                text: 'We are breaking new ground. Only those who are courageous will be able to address, inspire and retain their customers, partners and employees in the long term.'
              }, {
                headline: 'Sporty',
                text: 'The values of sport permeate our attitude, strategies and solutions.'
              }, {
                headline: 'Structured',
                text: 'We follow a clear "training plan"'
              },
            ]
          },
          whatJerry: {
            sectionIntro: {
              headline: 'What does Jerry do?',
              text1: [
                'Jerry forms, strengthens and cultivates relationships based on the emotional <span class="c-yellow">resonance of sport.</span>',
                '<span class="c-yellow">Relationships</span> between people and brands, companies and employees, project partners, between you and us, between you and me.',
              ],
              text2: [
                'On this basis, we look ahead and help you to align your sports business in order to master the <span class="c-yellow">challenges of the future.</span>',
                'From strategy papers to personnel team expansion to concrete cooperations, we accompany you through the time of change and beyond.',
              ]
            },
            sectionResults: {
              headline: 'What will Jerry deliver?',
              list: [
                {
                  img: 'icon_jerry_leistungen_01.svg',
                  title: 'Analysis & Control Tools',
                  text: 'The demands of sports business partnerships are constantly rising. Increasingly they are influenced by marketing, strategic, political and social factors that vary from one company to the next. We will analyze your company and equip you with individually customized tools to help you make goal-oriented decisions on the basis of sound facts.',
                }, {
                  img: 'icon_jerry_leistungen_02.svg',
                  title: 'Recommendation for Strategy and action',
                  text: 'We believe in the resonance of sport as a catalyst for companies to develop successfully. This primary goal forms the basis for authentic strategies and recommendations that we tailor specifically to our partners.',
                }, {
                  img: 'icon_jerry_leistungen_03.svg',
                  title: 'Implementation and activation management',
                  text: 'To maximize the effectiveness of your strategy, it is essential to select and implement activation measures in a purposeful manner. Jerry knows what will work in which environment, and how best to address your specific target group. We will also support you with project control and help you to execute your plans as effectively and efficiently as possible.',
                }, {
                  img: 'icon_jerry_leistungen_04.svg',
                  title: 'Rights Evaluation & Negotiation Support',
                  text: 'Rights are always worth what the buyer is prepared to pay. Not only do we know the “market prices”, we weigh them up against our partners’ requirements. We provide clear evaluations, present specific alternatives and guide you through all contractual negotiations with compelling arguments.',
                }, {
                  img: 'icon_jerry_leistungen_05.svg',
                  title: 'Personnel service',
                  text: 'Especially in times of change or in the context of project-related challenges, an agile and specialized team is required. Depending on the framework conditions, we provide our partners with the necessary specialists in flexible employment models.',
                }, {
                  img: 'icon_jerry_leistungen_06.svg',
                  title: 'Cooperation consulting, acquisition and support',
                  text: 'We believe in the power of cooperation. On this basis we initiate and maintain relationships between companies and brands. We accompany the entire cooperative process from the selection of adequate cooperation partners, to the linking of the appropriate persons, to the design of content and support.',
                }
              ]
            },
            sectionReport: {
              headline: 'The Jerry Report',
              text: [
                'Jerry sees itself as a partner and advisor to decision-makers. Our results are tailored to your needs and always based on facts. By delivering <span class="c-yellow">transparent and verifiable results we aim to help you make the best decisions moving forward.</span>',
                'That’s why we compile and process the results of our work into a concise, verifiable Jerry Report for presentation to all our partners.',
              ]
            },
            sectionDigital: {
              headline: 'The partner for the digital. ',
              text: [
                'All strategies and solutions must be digitally thought out and implemented. That’s why there is <a href="/en/digital" class="c-blue">Jerry Digital.</a>',
                'We bundle the know-how of numerous experts, are very close to the latest digital developments and trends and know how to create inspiring experiences with lean project setups.',
              ]
            },
          },
          references: {
            sectionIntro: {
              headline: 'References',
              text: [
                'We work for prestigious companies and sports personalities from a broad cross-section of industries and sports.',
                'We build bridges to connect these worlds and treat the trust placed in us by our partners as our greatest asset.',
              ]
            },
          }
        }
      },
      digitalPage: {
        imgHowJerryDigital1: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900006/jerry-website-assets/jerrydigital_how_01_2400x1350px_ivkwdp.jpg',
        },
        imgHowJerryDigital2: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900005/jerry-website-assets/jerrydigital_how_02_2400x1350px_vcggie.jpg',
        },
        pictogramWhoJerryDigital: 'infografik_jerrydigital_who.svg',
        pictogramHowJerryDigital: 'infografik_jerrydigital_scrum.svg',
        imgWhatSportsBusinessConsultants: {
          default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900006/jerry-website-assets/jerrydigital_jerry_teaser_2880x1250px_uvolew.jpg',
          mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900006/jerry-website-assets/jerrydigital_jerry_teaser_2880x1250px_uvolew.jpg',
          mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900006/jerry-website-assets/jerrydigital_jerry_teaser_2880x1250px_uvolew.jpg',
          mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595342722/jerry-website-assets/jerrydigital_jerry_teaser_1960px_s5tmzy.jpg',
          mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595342722/jerry-website-assets/jerrydigital_jerry_teaser_1960px_s5tmzy.jpg',
          mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900006/jerry-website-assets/jerrydigital_jerry_teaser_mobil_1440x1440px_oplkmv.jpg',
        },
        de: {
          pictogramWhyJerryDigital: 'infografik_jerrydigital_venn_de.svg',
          meta: {
            title: 'Jerry | Deine persönlichen Sports Technology Berater',
            description: 'Jerry Digital verbindet Sportbusiness mit medien-technologischem Know-How und begleitet Kommunikationsprojekte vom Konzept bis hin zur finalen Umsetzung.'
          },
          whoJerryDigital: {
            headline: 'Wer ist Jerry Digital?',
            text: 'Wir sind gesellschaftsrechtlich mit der Medientools Solutions GmbH verbunden und greifen damit jederzeit auf die erforderlichen <span class="c-blue">IT-Kompetenzen</span> und <span class="c-blue">Entwickler-Kapazitäten</span> zu.'
          },
          whyJerryDigital: {
            headline: 'Warum Jerry Digital?',
            subline: 'Wir verbinden die relevanten Kompetenzfelder.',
          },
          howJerryDigital: {
            headline: 'Wie arbeitet Jerry Digital?',
            subline: 'Bei allem, was wir tun, folgen wir unseren <span class="c-blue">6 Prinzipien:</span>',
            list: [
              {
                headline: 'Individuell',
                text: 'Wir stellen Dir ein Kompetenzteam zur Seite und begleiten den Prozess ganzheitlich und persönlich.'
              }, {
                headline: 'Nutzerorientiert',
                text: 'Wir denken als Kunden und Nutzer: Wie ist die User Experience, welchen Mehrwert bietet mir das Produkt?'
              }, {
                headline: 'Modular',
                text: 'Wir schauen voraus und schaffen Lösungen, die für Deine Kunden, Bereiche und Märkte adaptierbar sind.'
              }, {
                headline: 'Skalierbar',
                text: 'Wir schaffen Lösungen, die sich in Umfang und Volumen performant anpassen lassen.'
              }, {
                headline: 'Offen',
                text: 'Wir entwickeln nichts, was es schon gibt! Wir denken in APIs und Open Source.'
              }, {
                headline: 'Agil',
                text: 'Wir nutzen SCRUM, planen in SPRINTS und handeln ITERATIV – die Basis für effiziente Produktentwicklung.'
              }
            ]
          },
          whatJerryDigital: {
            sectionIntro: {
              headline: 'Was macht Jerry Digital?',
            },
            sectionResults: {
              headline: 'Wir liefern digitale Strategien und Lösungen für Dein Sport-Business.',
              list: [
                {
                  img: 'icon_jerrydigital_leistungen_01.svg',
                  title: 'E-Sport Strategie und Konzepte',
                  text: 'Jerry Digital verlängert die traditionellen Werte des Sports auch in die digitale Welt. Über Workshops bis hin zu Detailkonzepten liefern wir zusammen mit ausgewählten Spezialisten Insights, Strategien und Handlungsempfehlungen, die neben kommunikativen auch gesellschaftsrelevante und technologische Aspekte berücksichtigen.',
                }, {
                  img: 'icon_jerrydigital_leistungen_02.svg',
                  title: 'Sports Tracking Anwendungen',
                  text: 'Dem Einsatz innovativer Sports-Tracking Anwendungen kommt in der Vermarktung und in der Aktivierung eine immer größere Bedeutung zu. Jerry Digital berät, konzipiert und entwickelt maßgeschneiderte Lösungen. Dabei denken wir in skalierbaren Produkten, nutzen bewährte Open-Source Optionen, schaffen Schnittstellen zu renommierten Plattformen und entwickeln kundenspezifische Features.',
                }, {
                  img: 'icon_jerrydigital_leistungen_03.svg',
                  title: 'Sport- und Management Plattformen',
                  text: 'Softwareentwicklung ist immer Mittel zum Zweck. Als Sport-Business Experten verfügen wir über das Verständnis für Prozesse, Zielgruppen sowie deren Nutzerverhalten und kombinieren dieses mit Entwickler-Kompetenz. Jerry Digital liefert komplexe Management-Systeme für die Planung, Steuerung und Verwaltung der jeweiligen Business- oder Kommunikationsanforderung.',
                }, {
                  img: 'icon_jerrydigital_leistungen_04.svg',
                  title: 'Showreels, Trailer und Clips',
                  text: 'Die Welt des Sports liefert einzigartige emotionale Geschichten und Möglichkeiten, die es gilt, zielgerichtet aufzubereiten und der Zielgruppe bereitzustellen. Jerry Digital konzipiert, produziert und distribuiert individuelle digitale Contentformate - wie immer, gemeinsam mit den adäquaten Spezialisten.',
                }, {
                  img: 'icon_jerrydigital_leistungen_05.svg',
                  title: 'Augmented und Virtual Reality',
                  text: 'Steigende Bandbreiten, hoch performante Endgeräte und Browser sowie zunehmende Entwickler-Schnittstellen zu den Social Media Plattformen schaffen völlig neue Möglichkeiten, die Emotionen des Sports über erweiterte Realitäten bereitzustellen und zu kapitalisieren. Von der Beratung, über die Entwicklung bis hin zur kommunikativen Implementierung liefert Jerry Digital das komplette Leistungsspektrum im Bereich “Extended Reality” - in nativen Apps, über Web-AR oder Social AR.',
                }, {
                  img: 'icon_jerrydigital_leistungen_06.svg',
                  title: 'Social Media Kampagnen',
                  text: 'Die inflationäre Bespielung von Social Media Plattformen gepaart mit dem spezifischen Nutzerverhalten erfordert differenzierende Inhalte und Mechaniken, die den sog. Scroll-Stopper sowie eine Interaktion und eine virale Verbreitung auslösen. Neben der klassischen Contentberatung konzipiert und entwickelt Jerry Digital plattformspezifische AR-Filter in 2D und 3D, die zu einer Vervielfachung der Verweildauer und Konversionsrate und damit zu einer erfolgreichen Kampagne führen.',
                }, {
                  img: 'icon_jerrydigital_leistungen_07.svg',
                  title: 'Games und Animation',
                  text: 'Der Sport bietet unendliche Anlässe für spielerische und erklärende Aktivierungen. Gemeinsam mit renommierten 3D-Artists und Spieleentwicklern berät, konzipiert und entwickelt Jerry Digital innovative Spiele und Animationen - eingebettet in native Apps, web-basiert oder für Social Media Einbindung.',
                }, {
                  img: 'icon_jerrydigital_leistungen_08.svg',
                  title: 'Visionen und Prototypen',
                  text: 'Auch im Sport gibt es Dinge, die gibt es einfach noch nicht. Solche Visionen digital erlebbar zu machen oder entsprechende Software-Prototypen für einen Entscheidungsprozess zu entwickeln, dafür gibt es Jerry Digital.',
                }
              ],
              text: [
                'Jerry Digital verbindet <span class="c-blue">Sportbusiness mit medientechnologischem Know-how</span> und begleitet Kommunikationsprojekte vom Konzept bis hin zur finalen Umsetzung.',
                'Dabei setzt Jerry Digital auf die Möglichkeiten des digitalen Zeitalters, um die Emotionen des Sports auf <span class="c-blue">neue und überraschende Weise</span> erlebbar zu machen.',
              ]
            },
            sectionSportsBusinessConsultants: {
              headline: 'Sports Business Consultants',
              text: [
                '<span class="c-blue">Jerry Digital</span> setzt beim Sportbusiness dort an, wo eine konkrete digitale Lösung benötigt wird.',
                'Doch damit ist bei Jerry nicht Schluss... für allgemeine Beratungsfragen im Bereich des Sportbusiness, die über einzelne digitale Lösungen weit hinaus gehen, haben wir mit <a href="/" class="c-yellow">Jerry – Sports Business Consultants</a> die passende Antwort.',
              ]
            }
          }
        },
        en: {
          pictogramWhyJerryDigital: 'infografik_jerrydigital_venn_en.svg',
          meta: {
            title: 'Jerry | Your personal Sports Technology Consultants',
            description: 'Jerry Digital combines sports business with media technology know-how and supports communication projects from concept to final implementation.'
          },
          whoJerryDigital: {
            headline: 'Who is Jerry Digital?',
            text: 'We are affiliated under company law with Medientools Solutions GmbH and thus have access to the necessary <span class="c-blue">expertise</span> and <span class="c-blue">capacities</span> at all times.'
          },
          whyJerryDigital: {
            headline: 'Why Jerry Digital?',
            subline: 'We combine the relevant fields of competence.',
          },
          howJerryDigital: {
            headline: 'How does Jerry Digital work?',
            subline: 'In everything we do, we follow our <span class="c-blue">6 principles:</span>',
            list: [
              {
                headline: 'Individual',
                text: 'We provide you with a team of experts and accompany the process holistically and personally.'
              }, {
                headline: 'User-oriented',
                text: 'We think as customers and users: What is the user experience, what added value does the product offer me?'
              }, {
                headline: 'Modular',
                text: 'We look ahead and create solutions that are adaptable for your customers, areas and markets.'
              }, {
                headline: 'Scalable',
                text: 'We create solutions that can be adapted in scope and volume with high performance.'
              }, {
                headline: 'Open',
                text: 'We do not develop anything that already exists! We think in APIs and Open Source.'
              }, {
                headline: 'Agile',
                text: 'We use SCRUM, plan in SPRINTS and act ITERATIVELY - the basis for efficient product development.'
              }
            ]
          },
          whatJerryDigital: {
            sectionIntro: {
              headline: 'What does Jerry Digital do?',
            },
            sectionResults: {
              headline: 'We deliver digital strategies and solutions for your sports business.',
              list: [
                {
                  img: 'icon_jerrydigital_leistungen_01.svg',
                  title: 'E-Sport strategy and concepts',
                  text: 'Jerry Digital extends the traditional values of sport into the digital world. From workshops to detailed concepts, we work with selected specialists to deliver insights, strategies and recommendations for action that take into account not only communicative but also socially relevant and technological aspects.',
                }, {
                  img: 'icon_jerrydigital_leistungen_02.svg',
                  title: 'Sports tracking applications',
                  text: 'The use of innovative sports tracking applications is becoming increasingly important in marketing and activation. Jerry Digital advises, designs and develops tailor-made solutions. We think in terms of scalable products, use proven open source options, create interfaces to renowned platforms and develop customized features.',
                }, {
                  img: 'icon_jerrydigital_leistungen_03.svg',
                  title: 'Sports and management platforms',
                  text: 'Software development is always a means to an end. As sports business experts, we have an understanding of processes, target groups and their user behaviour and combine this with developer competence. Jerry Digital delivers complex management systems for planning, controlling and managing the respective business or communication requirements.',
                }, {
                  img: 'icon_jerrydigital_leistungen_04.svg',
                  title: 'Showreels, Trailer and Clips',
                  text: 'Die Welt des Sports liefert einzigartige emotionale Geschichten und Möglichkeiten, die es gilt, zielgerichtet aufzubereiten und der Zielgruppe bereitzustellen. Jerry Digital konzipiert, produziert und distribuiert individuelle digitale Contentformate - wie immer, gemeinsam mit den adäquaten Spezialisten.',
                }, {
                  img: 'icon_jerrydigital_leistungen_05.svg',
                  title: 'Augmented and Virtual Reality',
                  text: 'Rising bandwidths, high-performance end devices and browsers as well as increasing developer interfaces to social media platforms create completely new possibilities to provide and capitalize on the emotions of sports via extended realities. Jerry Digital provides the complete range of services in the area of "Extended Reality" - from consulting and development to communicative implementation - in native apps, via Web AR or Social AR.',
                }, {
                  img: 'icon_jerrydigital_leistungen_06.svg',
                  title: 'Social media campaigns',
                  text: 'The inflationary use of social media platforms coupled with specific user behavior requires differentiating content and mechanisms that trigger the so-called scroll-stopper as well as interaction and viral spread. In addition to classic content consulting, Jerry Digital designs and develops platform-specific AR filters in 2D and 3D, which lead to a multiplication of the retention time and conversion rate and thus to a successful campaign.',
                }, {
                  img: 'icon_jerrydigital_leistungen_07.svg',
                  title: 'Games and Animation',
                  text: 'The sport offers endless occasions for playful and explanatory activations. Together with renowned 3D artists and game developers, Jerry Digital advises, designs and develops innovative games and animations - embedded in native apps, web-based or for social media integration.',
                }, {
                  img: 'icon_jerrydigital_leistungen_08.svg',
                  title: 'Visions and Prototypes',
                  text: 'There are also things in sport that simply do not exist yet. Jerry Digital is there to make such visions digitally tangible or to develop corresponding software prototypes for a decision-making process.',
                }
              ],
              text: [
                'Jerry Digital combines <span class="c-blue">sports business with media-technological know-how</span> and accompanies communication projects from concept to final implementation.',
                'Jerry Digital uses the possibilities of the digital age to bring the emotions of sport to life in <span class="c-blue">new and surprising ways.</span>',
              ]
            },
            sectionSportsBusinessConsultants: {
              headline: 'Sports Business Consultants',
              text: [
                '<span class="c-blue">Jerry Digital</span> starts with the sports business where a concrete digital solution is needed.',
                'But Jerry doesn’t stop there... for general consulting questions in the field of sports business, which go far beyond individual digital solutions, we have the right answer with <a href="/en" class="c-yellow">Jerry – Sports Business Consultants.</a>',
              ]
            }
          }
        }
      },
      projects: {
        de: {
          indexSectionHeadline: 'Show Cases',
          linkTextMore: 'mehr erfahren …',
          clientsHeadline: 'Auftraggeber',
          partnersHeadline: 'In Kooperation mit',
          list: [
            {
              meta: {
                title: 'Jerry | Partnership Management Formel E',
                description: 'Innovative digitale Verlängerungen im Sport-Business werden immer wichtiger - insbesondere in Zeiten pandemischer Einschränkungen.'
              },
              url: 'partnership-management-formel-e',
              title: 'Partnership Management Formel E',
              subline: 'Innovative digitale Verlängerungen',
              teaser: 'Innovative digitale Verlängerungen im Sport-Business werden immer wichtiger - insbesondere in Zeiten pandemischer Einschränkungen.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1638888260/jerry-website-assets/bmw-partnership-management-formel-e-showreel_l4jksv.mp4',
                posterSrc: ''
              },
              headline: 'Partnership Management Formel E',
              infoText: [
                {
                  headline: 'WHY – Was hat uns herausgefordert?',
                  text: 'Im Rahmen unserer Mandatierung für BMW i Motorsport, waren wir u.a. für das Partnership Management in der Formel E verantwortlich. Dies beinhaltete die Aufgabe und den eigenen Anspruch, den Team-Partnern (Sponsoren) größtmögliche Mehr- und Gegenwerte über die Saison zu liefern - und das in einer Zeit, in der pandemiebedingt Live-Veranstaltungen entweder gar nicht oder nur sehr eingeschränkt möglich waren.<br>Es galt also eine adäquate und ortsunabhängige Kommunikationsplattform zu entwicklen, welche nicht nur eine einmalige Live-Experience transportiert, sondern zugleich auch die Möglichkeit für Networking und Interaktion bietet - all das auf Basis technischer und inhaltlicher State-of-the-Art-Standards. Zudem sollte die Plattform auch für die Partner zur Verfügung stehen, um eigene Botschaften zu teilen und sich untereinander auszutauschen.'
                }, {
                  headline: 'HOW – Wie haben wir gedacht?',
                  text: 'Um die Erwartungen eines der innovativsten Unternehmens der Welt zu erfüllen und getreu unserer Philosophie, haben wir ein Expertenteam aus den Bereichen „Kommunikation“ und „Technologie“ zusammengestellt und gemeinsam mit BMW eine Virtual Reality Strategie entwickelt, mit der wir den Partnern nicht nur die Möglichkeit bieten konnten, sich räumlich zu treffen, sondern ihnen zugleich auch Inhalte zu präsentieren, die sich im realen Leben gar nicht abbilden lassen. Zudem war uns wichtig, dass die damit entstandene Kommunikationsplattform auch synergetisch und skalierbar für weitere Einsatzbegereiche oder Anlässe genutzt werden kann.<br>Um Qualität, Stabilität, Performance und Datensicherheit zu gewährleisten, haben wir das Konzept mit ENGAGE, dem Marktführer für interaktive und Multi-User VR-Plattformlösungen, Pico, dem führenden B2B-VR-Hardware Produzenten sowie der govar GmbH, unserem Premium-Partner für 3D Modellierung und VR Implementierung umgesetzt. Wir Sind Jerry war neben der inhaltlichen Konzeption und Redaktion für die gesamte Projektsteuerung und Partner-Kommunikation verantwortlich.'
                }, {
                  headline: 'WHAT – Was hat die BMW-Partner fasziniert?',
                  text: 'Im Ergebnis durften wir drei spektakuläre VR Sessions mit jeweils bis zu 50 Personen aus der ganzen Welt umsetzen. Eingebettet in die von uns konzipierte „3i Masterclass Serie“ (Inform - Inspire - Interact) wurden über Virtual Reality den Partnern einmalige Live-Experiences ermöglicht, u.a.:<br><ul><li> Virtuelle BMW i Motorsport Garage Touren mit den BMW Piloten und X-Ray Einblicke in das Innere der Formel E Boliden</li><li> Exklusiver und interaktiver digitaler Launch des BMW iX</li><li> Unter dem Motto „Neue Dimensionen“: Eine Weltraum-Mission zur ISS gemeinsam mit dem US Astronauten Steven Swanson</li><li> Live-Rennsport-Feeling als Beifahrer im Mini Electric-Pacesetter über den Stadtkurs von Monaco im Rahmen einer spektakulären 360-Grad-Lap</li></ul><br>Abgerundet wurde jede VR Session mit einem Get-together auf einer futuristischen Roof-Top-Bar.<br><br>Alles in allem ist es gelungen, einen innovativen Hospitalcity-Ansatz umzusetzen, der nicht nur in Zeiten von Corona eine perfekte Verlängerung von Live-Events darstellt.<br><br>Wir danken der BMW Group für ihr Vertrauen und den Partnern für das ausserordentlich positive Feedback.'
                }
              ],
              clients: [
                'BMW Group'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Social Media AR Sports Game und Filter',
                description: 'Jerry Digital entwickelt Augmented Reality Filter und Sport Spiele, die innerhalb der Social Media Plattformen sowie über Web-Links funktionieren.'
              },
              url: 'sports-extended-reality',
              title: 'Sports Extended Reality',
              subline: 'Social Media AR Game',
              teaser: 'Wie generieren wir hohe Aufmerksamkeit, große Interaktionsraten und bestmögliches Verbreitungspotenzial? Wir entwickeln Augmented Reality Filter und Spiele, die innerhalb der Social Media Plattformen sowie über Web-Links funktionieren.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900018/jerry-website-assets/AR_game_video_bll3do.mp4',
                posterSrc: ''
              },
              headline: '50 Jahre Elfmeterschießen für den guten Zweck',
              infoText: [
                {
                  headline: 'WHY – Was war der Trigger?',
                  text: 'In Zeiten von Corona sind Budgets knapp. Das trifft nicht nur uns Agenturen, sondern auch die zahlreichen Sportverbände, Vereine und Organisationen. Inspiriert von der CSR Aktion des Fußball-Bundesliga Spielers Simon Zoller, der über die Social Media Kampagne „Spende Deine Trikotnummer“ zu Gunsten von #GABFAF (Gemeinsames Aktionsbündnis zur Förderung des Amateurfußballs) ein Corona-Soforthilfeprogramm für Amateurvereine ins Leben gerufen hat, wollten wir ebenfalls einen Beitrag leisten und den Amateurfußball unterstützen.<br>Aber was könnte die inhaltliche Geschichte liefern? Im Jahr 2020 feiert das Elfmeterschießen 50jähriges Jubiläum. Was damals aus dem Amateurfußball heraus entstand, ist heute aus der größten Sportart der Welt nicht mehr wegzudenken. Dies haben wir zum Anlass genommen und ein Augmented Reality (AR) Elfmeterschießen-Spiel entwickelt, welches durch seine Verbreitung nicht nur Aufmerksamkeit für #GABFAF sondern zugleich Spenden generieren soll.'
                }, {
                  headline: 'HOW – Wie sind wir vorgegangen?',
                  text: 'Um dem Spiel bestmögliches Verbreitungspotenzial zukommen zu lassen, haben wir es als „Social AR Game“ für die Plattformen Instagram und Facebook konzipiert und umgesetzt. Die entsprechende AR Entwicklungsplattform (Spark AR) verfügt über eine Face Detection-Technologie, die es den Usern ermöglicht, das Elfmeterschießen über Gesichtssteuerung zu spielen. Aus gegebenem Anlass haben wir das gesamte Spiel selbstverständlich im Style der 70er Jahre gestaltet.'
                }, {
                  headline: 'WHAT – Welches Produkt ist daraus entstanden?',
                  text: 'Entstanden ist eines der innovativsten Social AR Games. Über Face-Tracking bzw. Kopfbewegung richten die User ihre Schüsse aus, über das Öffnen des Mundes lösen sie den Schuß aus. Nach fünf Schüssen, stellt sich heraus, ob sie „Hero“ oder „Looser“ sind. Das Ergebnis findet sich auf einem digitalen Spieler-Sticker wieder, der über die Facebook oder Instagram Story geteilt werden kann und somit für die Verbreitung sorgt. Sowohl das Spiel als solches, aber auch die Facefilter bei der Stickergestaltung greifen den 70er-Jahre-Style auf und unterstreichen den Jubiläums-Ansatz - sorgen aber vor allem für „likeable“ und „shareable“ Content.<br>Es freut uns sehr, dass das RND (RedaktionsNetzwerk Deutschland) sowie erste prominente Persönlichkeiten und Influencern die Aktion unterstützen wollen.<br>Wie das konkret aussieht, erfahrt ihr über die relevanten Social Media Kanäle.'
                }
              ],
              clients: [
                'Wir selbst'
              ],
              partners: [
                'RedaktionsNetzwerk Deutschland und #GABFAF'
              ],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330129/jerry-website-assets/iphone_AR_vwfmc4.png',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Sport Tracking Software und Anwendungen',
                description: 'Jerry Digital entwickelt responsive, web-basierten Sports-Tracking Live Anwendungen mit integrierter SOS Funktion für die Athleten.'
              },
              url: 'sports-technology',
              title: 'Sport Technologie',
              subline: 'Triathlon Live-Tracking',
              teaser: 'Ausdauersport-Events aus der Ferne erlebbar machen und gleichzeitig auch noch die Sicherheit der Athleten optimieren - geht das? Ja, durch die Entwicklung einer responsiven, web-basierten Sports-Tracking Anwendung mit integrierter SOS Funktion für die Athleten.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900023/jerry-website-assets/sports_tracking_hero_startseite_iu2f3i.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900025/jerry-website-assets/sports_tracking_hero_loop_dnawx1.mp4',
                posterSrc: ''
              },
              headline: 'Wo ist Horst?',
              infoText: [
                {
                  headline: 'WHY - Was hat uns angetrieben?',
                  text: 'Als Management-Partner des Profi-Triathlonteams TEAM SPORT FOR GOOD waren wir gefordert, Ausdauer-Events medial zu begleiten. Als einer unserer Athleten, Horst Reichel, beim Ironman Arizona plötzlich bei keiner Zwischenzeit mehr auftauchte, fragten wir uns mehrere Stunden lang: „Wo ist Horst”? Erst am Abend konnte er uns über seinen Defekt auf der Radstrecke informieren.<br>Die Motivation war geweckt. Es musste im Zeitalter von 4G und Geo-Tracking möglich sein, die Standorte von Athleten permanent zu erfassen. Wir kontaktierten einen Live-Tracking-Device Anbieter aus dem Motorsport (LiveRank), gingen gemeinsam auf die Deutsche Telekom zu und nahmen im Gespann das erste GPS basierte Triathlon-Live-Tracking in Angriff - und das bei einem der größten Events der Welt, der "Challenge Roth“.'
                },
                {
                  headline: 'HOW - Wie sind wir mit den Herausforderungen umgegangen?',
                  text: 'Unser Part war die Entwicklung einer responsiven Web-Plattform, welche sowohl für die Daheimgebliebenen als auch für die Fans an der Strecke funktioniert. Zudem sollte die Anwendung durch eine integrierte SOS Funktion der Sicherheit der Athleten dienen. Und natürlich musste die Plattform für weitere Events adaptierbar sein. Es gab also gleich mehrere Herausforderungen:<br><br><ul><li>Anlegen individueller Streckenführungen - auch durch Wald und Wiese</li><li>Ausgleich von GPS Schwankungen für eine laufruhige Darstellung</li><li>Anwendbarkeit für Einzelstarter und Staffeln</li><li>Kurzfristige Anpassungsfähigkeit von Strecken- oder Teilnehmerdaten im CMS</li><li>Der eigene Anspruch: Bestmögliches Infotainment für die Nutzer</li></ul><br>Da die verfügbaren Kartendienste die Projektanforderungen nicht abdeckten, entwickelten wir eine Methode zur Interpolation ortsbezogener Daten auf benutzerdefinierten Strecken (Track Matching), die es uns ermöglichte, notwendige Businesslogiken, wie Kontrollpunkte, Rundenerfassung, Signalverlustbereiche usw. zu integrieren. Da es sich um ein Prototypen-Projekt unter hohem Zeitdruck handelte, sind wir iterativ und in ständiger Abstimmung mit den Hardware-Entwicklern und der Deutschen Telekom vorgegangen.'
                },
                {
                  headline: 'WHAT - Was war das Ergebnis?',
                  text: 'Das Ergebnis war ein erfolgreicher Einsatz im Rahmen der Challenge Roth 2016 mit der Premiere einer responsiven Infotainment-Anwendung, die zusätzlich zu der Athletenvisualisierung renn-relevante Daten wie Geschwindigkeit, Position, Rundennummer, Entfernungen zum Ziel/Führenden/Vordermann, Netzwerk-/GPS-Signalstärke und SOS-Position live anzeigen konnte.'
                }
              ],
              clients: [
                'Telekom Deutschland GmbH'
              ],
              partners: [
                'SAS Technologies (Live Rank) und der DATEV Challenge Roth'
              ],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330357/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Digitale interaktive 3D Präsentation für Visionen im Sport',
                description: 'Innovative Showcase einer Sportanlage  als Web-Präsentation und 3D Facility-Walkthrough'
              },
              url: 'sport-visions',
              title: 'Sport Visionen',
              subline: 'Digitale interaktive Präsentations-Plattform',
              teaser: 'Wie präsentieren wir etwas, dass es noch nicht gibt? Wir sammeln Fakten, kreieren die Story, visualisieren zeitgemäß und bündeln die Inhalte digital, interaktiv und web-basiert.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900030/jerry-website-assets/sports_visions_hero_startseite_jcmupx.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900032/jerry-website-assets/sports_visions_fuse_hero_ipdl6s.mp4',
                posterSrc: ''
              },
              headline: 'Fuse - Die Turnhalle der Zukunft',
              infoText: [
                {
                  headline: 'WHY – Was hat uns inspiriert?',
                  text: 'Offensichtlich hatte unsere Partner-Gesellschaft, die Medientools Solutions GmbH, keinen so schlechten Job gemacht. Ihre Referenzen im Bereich der interaktiven 3D Gebäudevisualisierung weckte das Interesse der Sportplan GmbH, die sich auf die Beratung, Entwicklung und Betreibung innovativer Sportstätten spezialisiert hat und mit ihrem FUSE Konzept die „Turnhalle der Zukunft“ installieren wollte. Wir waren sofort inspiriert von der Mission, junge Menschen rund um den Extremsport nahtlos auf einem Gelände zu vereinen. Es galt, eine adäquate Pitch-Präsentation zu entwickeln, um Investoren und Sponsoren für die Realisierung zu gewinnen.'
                },
                {
                  headline: 'HOW – Wie sind wir vorgegangen?',
                  text: 'Wir bündelten also unser Sport- und Marketing-Know-how und inszenierten gemeinsam mit unseren 3D-Artists und Entwicklern die Turnhalle der Zukunft.<br>Basis unseres Schaffens waren 2D Architekturpläne der gesamten Anlage. Diese galt es, virtuell als 3D-Modell aufzubauen, futuristisch zu gestalten und durch eine interaktive „Walk-through-Navigation“ erlebbar zu machen.<br>Weil auch das FUSE Konzept zahlreiche digitale Elemente, wie z.B. das FUSE Media-Lab beinhaltet, in dem die Sportler ihren eigenen Content bearbeiten und verbreiten konnten, stand außer Frage, dass auch unser Pitch-Deck, web-basiert und interaktiv gestaltet werden musste. Wir bündelten, neben der Visualisierung der Facility, alle weiteren Inhalte, wie Informationen zur gesellschaftlichen Relevanz, Mafo-Daten und Businessplan auf einer responsiven Online-Präsentationsplattform.'
                },
                {
                  headline: 'WHAT – Was war das Ergebnis?',
                  text: 'Was mit dem Gedanken an eine Powerpoint-Präsentation begann, wurde zu einer interaktiven, web-basierten Präsentationsplattform im futuristischen Design, welche auch auf Vorstandsebene bedeutender Sportartikelkonzerne als Pitchdeck-Benchmark geadelt wurde.'
                }
              ],              
              clients: [
                'Sportplan GmbH'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330620/jerry-website-assets/sports_visions_fuse_a_neojdv.png',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330701/jerry-website-assets/sports_visions_fuse_b_sylv2k.png',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330747/jerry-website-assets/sports_visions_fuse_c_o3hpjz.png',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Sport Business Management Software und Anwendungen',
                description: 'Jerry Digital entwickelt modulare, skalierbare und lösungsorientierte IT-Systeme und -Anwendungen für Prozess-Optimierung im Sport Business.'
              },
              url: 'sport-management-applications',
              title: 'Sport Management Anwendungen',
              subline: 'IT-Systementwicklung',
              teaser: 'Auch im Sportbusiness gilt - wie können Prozesse nachhaltig optimiert werden? Wir entwickeln modulare, skalierbare und lösungsorientierte IT-Systeme und -Anwendungen.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
              introMedia: {
                type: 'img',
                settings: {},
                src: {
                  default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                }
              },
              headline: 'Back to the roots',
              infoText: [
                {
                  headline: 'WHY – Warum waren wir die Richtigen?',
                  text: 'Für Sportstudenten gab und gibt es bis heute einen sehr attraktiven Job-Anbieter: die cip marketing GmbH. So waren auch wir damals Teil des cip Teams und durften zahlreiche Handels- und Eventmarketing Maßnahmen für große Sport-Brands, wie Adidas, Salomon, Reebok und Co. begleiten. Weil wir in der Sportfamilie immer irgendwie miteinander verbunden bleiben und wir die Anforderungen an das cip Agenturbusiness noch kennen, durften wir ein Upgrade für das in die Jahre gekommenes web-basiertes cip ERP System entwickeln, welches in Bezug auf komplexe Benutzeroberflächen, mobile Nutzung und lange Ladezeiten den aktuellen Agenturansprüchen nicht mehr gerecht wurde.'
                },
                {
                  headline: 'HOW – Wie sind wir vorgegangen?',
                  text: 'Zunächst galt es, ein Assessment des bestehenden ERP Systems zu erstellen. Die neutrale Bewertung ergab, dass der bestehende Funktionsumfang, die angedachten Verbesserungen sowie der gewünschte Performance-Boost nicht mit dem bestehenden Legacy-System erreicht werden können. Auch etablierte ERP-Systeme würden das nicht “out of the box” lösen können. Von daher entschied man sich für eine komplette Neuentwicklung des Systems.<br>Vorab erstellten wir einen Prototyp auf dem Stand der Technik. Damit wurde die flüssige Darstellung großer Datenmengen, rasche komplexe Datenabfragen sowie Echtzeit-Aktualisierungen in einer ansprechenden Benutzeroberfläche demonstriert.<br>Um die Arbeitsprozesse von cip optimal zu unterstützen, wählten wir eine agile Projektsteuerungs-Methodologie mit einer sprintbasierten Modul-für-Modul-Implementierung. Unser agiles Entwicklungsteam besteht aus Fullstack-Entwicklern, die zugleich an der Front- und Backend-Implementierung neuer Funktionen arbeiten. Wir bieten flexible Teamgrößen, um effizient und ressourcensparend auf Peak- und Downzeiten im Entwicklungsprozess reagieren zu können. Ein durchgängiges Kernteam aus Projektmanagern, Softwarearchitekten und Developern lässt uns schnell auf neue Kundenanforderungen reagieren.'
                },
                {
                  headline: 'WHAT – Was ist das Produkt?',
                  text: 'Jerry Digital entwickelte ein maßgeschneidertes System, das bereits für einzelne Kunden und Regionen in Betrieb ist und dessen genereller Rollout kurz bevorsteht.<br>Mit ihm lassen sich vollumfänglich sämtliche Prozesse in den Bereichen Personalwesen, Projektmanagement, Terminkoordination, Finanzen, POS-/Event-Aktionen, etc. verwalten. Neben der Desktop-Anwendung wurde für externe Mitarbeiter (Brand Ambassadors) eine Ionic basierte Progressive Web App (PWA) erstellt.<br>Zur Technologie: Auf Basis von Node.js wurde eine API und ein service-zentriertes modulares Backend erstellt. Als übergreifendes Frontend-Framework der verschiedenen Anwendungen nutzten wir Angular. Mit Material Design wurde ein weit verbreitetes Design System für die Benutzeroberfläche des ERP-Systems gewählt.'
                }
              ],              
              clients: [
                'cip marketing GmbH'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Digitale Bewegtbild Konzepte im Sport',
                description: 'Jerry Digital bündelt Markenkompetenz, Plattform-Know-how, Zugriff auf Protagonisten sowie effiziente Produktion und kreiert multifunktionale digitale Produkte.'
              },
              url: 'sports-content',
              title: 'Sport Content',
              subline: 'Digitaler Image Clip',
              teaser: 'In kürzester Zeit ein emotionales Kommunikationsmittel mit höchster Effizienz schaffen - wie ist das möglich? Wir bündeln Markenkompetenz, Plattform-Know-how, direkten Zugriff auf Protagonisten sowie zielgerichtete Hands-on-Produktion und kreieren daraus multifunktionale digitale Produkte.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900046/jerry-website-assets/sports_content_am_hero_startseite_a4qyyf.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: false,
                  loop: false,
                  muted: false,
                  controls: true
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900100/jerry-website-assets/sports_content_am_hero_kqqpcb.mp4',
                posterSrc: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900052/jerry-website-assets/sports_content_am_poster_2560x1440_v9azi9.jpg'
              },
              headline: 'Mein Name ist Gandl - Stephan Gandl!',
              infoText: [
                {
                  headline: 'WHY – Warum wurden wir kontaktiert?',
                  text: 'Wie viele andere Marken, entschied sich auch das globale Brand-Communication-Department von Aston Martin, seine Marke durch eine aggressiv-stylische Kampagne zu verjüngen, um damit auch die Kunden von Morgen anzusprechen. Was vom Grundsatz sicher richtig ist, half dem Handel nur bedingt, wenn es darum ging, ihre Stammkunden und Kernzielgruppe emotional anzusprechen. Gefragt war also ein zielgruppenkonformes Contentformat, welches dem Handel als digitales Kommunikationsmittel und Promotion-Tool diente. Da kam Jerry Digital ins Spiel. Wir durften unser Sport-, Marken- und Technologie-Know-how übereinanderlegen und einbringen.'
                },
                {
                  headline: 'HOW - Wie sind wir vorgegangen?',
                  text: 'Aufgrund der budgetären Rahmenbedingungen haben wir uns für einen multifunktional einsetzbaren Trailer entschieden, welcher die beiden Welten von Aston Martin “Sportlichkeit” und “Präzision” miteinander verbindet. Kaum eine Sportart vermittelt diese Werte besser als der Golfsport. Und weil es auch darum ging, diese Kernbotschaften unterhaltsam zu transportieren, brauchten wir einen entsprechenden Protagonisten und eine authentische Story. Mit dem Golfprofi Stephan Gandl war die perfekte Besetzung aus unserem Netzwerk gefunden. Wie kaum ein anderer verbindet der ehemalige Tourspieler und einer der besten Trickgolfer der Szene die Sport- und die Businesswelt, womit er einen perfekten Botschafter für die Kernzielgruppe darstellt. Und weil Stephan auch einen guten Dressman abgibt, war die Story klar: “Mein Name ist Gandl - Stephan Gandl!”'
                },
                {
                  headline: 'WHAT – Was ist daraus entstanden?',
                  text: 'Nach nur einem Schulterblick und einem Drehtag mit minimalstem Produktionsaufwand ist ein emotionaler Trailer entstanden, der multifunktional eingesetzt wird: Im Handel, in den Golfcubs, bei Golfevents, für die direkte digitale Ansprache der Kunden und selbstverständlich zielgerichtet über die Sozialen Kanäle.<br>Aus unserer Sicht ein Case, der die Effizienz und die Bündelung der drei Kompetenzfelder von Jerry Digital demonstriert.'
                }
              ],              
              clients: [
                'Aston Martin München'
              ],
              partners: [
                'LG42 GmbH'
              ],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                  },
                  subline: ''
                }
              ]
            }
          ],
        },
        en: {
          indexSectionHeadline: 'Show Cases',
          linkTextMore: 'read more …',
          clientsHeadline: 'Clients',
          partnersHeadline: 'In Cooperation with',
          list: [
            {
              meta: {
                title: 'Jerry | Partnership Management Formel E',
                description: 'Innovative digital extensions in the sports business are becoming increasingly important - especially in times of pandemic constraints.'
              },
              url: 'partnership-management-formel-e',
              title: 'Partnership Management Formel E',
              subline: 'Innovative digital extensions',
              teaser: 'Innovative digital extensions in the sports business are becoming increasingly important - especially in times of pandemic constraints.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1638888260/jerry-website-assets/bmw-partnership-management-formel-e-showreel_l4jksv.mp4',
                posterSrc: ''
              },
              headline: 'Partnership Management Formel E',
              infoText: [
                {
                  headline: 'WHY – What challenged us?',
                  text: 'As part of our mandate for BMW i Motorsport, we were responsible for partnership management in Formula E, among other things. This included the task and our own requirement to provide the team partners (sponsors) with the greatest possible added value throughout the season - and this at a time when, due to the pandemic, live events were either not possible at all or only possible to a very limited extent.<br>The task was to develop an adequate and location-independent communication platform that not only transports a unique live experience, but also offers the opportunity for networking and interaction - all based on state-of-the-art technical and content standards. In addition, the platform should also be available for partners to share their own messages and exchange information with each other.'
                }, {
                  headline: 'HOW – How did we think?',
                  text: 'In order to meet the expectations of one of the most innovative companies in the world and following our philosophy, we put together a team of experts from the fields of “communication” and “technology” and developed a virtual reality strategy together with BMW. With this strategy, we were not only able to offer partners the possibility to meet each other spatially, but at the same time to present them with content that could not be depicted in real life at all. It was also important to us that the resulting communication platform could also be used synergistically and in a scalable manner for other areas of application or occasions.<br>To ensure quality, stability, performance and data security, we implemented the concept with ENGAGE, the market leader for interactive and multi-user VR platform solutions, Pico, the leading B2B VR hardware producer, and govar GmbH, our premium partner for 3D modeling and VR implementation. We Are Jerry was responsible for the entire project management and partner communication in addition to content conception and editing.'
                }, {
                  headline: 'WHAT – What fascinated the BMW partners?',
                  text: 'As a result, we were allowed to implement three spectacular VR sessions, each with up to 50 people from all over the world. Embedded in the "3i Masterclass Series" (Inform - Inspire - Interact) designed by us, unique live experiences were made possible for the partners via virtual reality, including: <br><ul><li> Virtual BMW i Motorsport Garage tours with the BMW drivers and X-Ray insights into the interior of the Formula E bolides.</li><li> Exclusive and interactive digital launch of the BMW iX</li><li> Under the motto "New Dimensions": A space mission to the ISS together with US astronaut Steven Swanson</li><li> Live racing feeling as a co-driver in the Mini Electric-Pacesetter over the Monaco street circuit as part of a spectacular 360-degree lap</li></ul><br>Each VR session was rounded off with a get-together on a futuristic roof-top bar.<br><br>All in all, we succeeded in implementing an innovative hospitality approach that is a perfect extension of live events, not only in times of Corona.<br><br>We would like to thank the BMW Group for their trust and the partners for the extraordinarily positive feedback.'
                }
              ],
              clients: [
                'BMW Group'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888219/jerry-website-assets/bmw-partnership-management-formel-e-mobile_goywkg.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888218/jerry-website-assets/bmw-partnership-management-formel-e-oculus_e2ruzu.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1638888216/jerry-website-assets/bmw-partnership-management-formel-e-desktop_ppovpf.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Social media AR sports game and filter',
                description: 'Jerry Digital develops augmented reality filters and sports games that work within social media platforms and via web links.'
              },
              url: 'sports-extended-reality',
              title: 'Sports Extended Reality',
              subline: 'Social Media AR Game',
              teaser: 'How do we generate high attention, high interaction rates and the best possible dissemination potential? We develop augmented reality filters and games that work within social media platforms and via web links.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900018/jerry-website-assets/AR_game_video_bll3do.mp4',
                posterSrc: ''
              },
              headline: '50 years of penalty shootout for good purpose',
              infoText: [
                {
                  headline: 'WHY—What was the trigger?',
                  text: 'In times of Corona budgets are tight. This affects not only us agencies, but also the numerous sports associations, clubs and organisations. Inspired by the CSR action of the German Bundesliga player Simon Zoller, who launched a Corona emergency aid programme for amateur clubs via the social media campaign "Donate your jersey number" in favour of #GABFAF (Joint Action Alliance for the Promotion of Amateur Football), we also wanted to make a contribution and support amateur football.  But what could be the story behind this?  In 2020 the penalty shootout will celebrate its 50th anniversary. What emerged from amateur football at that time is now an integral part of the world’s greatest sport. We have taken this as an occasion and developed an Augmented Reality (AR) penalty shootout game, which should not only attract attention for #GABFAF but also generate donations.'
                }, {
                  headline: 'HOW—How did we proceed?',
                  text: 'To give the game the best possible distribution potential, we designed and implemented it as a "Social AR Game" for the platforms Instagram and Facebook. The corresponding AR development platform (Spark AR) has face detection technology that allows users to play the penalty shootout via face control. To mark the occasion, we naturally designed the entire game in the style of the 70s.'
                }, {
                  headline: 'WHAT—Which product has been developed from this?',
                  text: 'The result is one of the most innovative Social AR Games. The users align their shots via face tracking or head movement, by opening their mouth they trigger the shot. After five shots, it turns out whether they are "hero" or "loser". The result can be found on a digital player sticker, which can be shared via Facebook or Instagram Story and thus ensures its distribution.<br>Both the game as such, but also the face filters in the sticker design, pick up on the 70s style and underline the anniversary approach - but above all ensure "likeable" and "shareable" content.<br>We are very pleased that the RND (RedaktionsNetzwerk Deutschland) as well as first prominent personalities and influencers want to support the campaign.<br>You can find out what this actually looks like via the relevant social media channels.'
                }, {
                  headline: 'Potential:',
                  text: 'This pro bono case shows what is technically possible within the framework of the major social media platforms. Of course, such applications can also be launched as part of native apps or Web AR - opportunities that all players in sports can take advantage of with manageable budgets and maximum efficiency.'
                }
              ],
              clients: [
                'We ourselves'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_hero_smvrbs.jpg',
                  },
                  subline: ''
                },{
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900016/jerry-website-assets/AR_game_iphone_upgryh.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Sports Tracking Software and Applications',
                description: 'Jerry Digital develops responsive, web-based sports tracking live applications with integrated SOS functionality for the athletes.'
              },
              url: 'sports-technology',
              title: 'Sports Technology',
              subline: 'Triathlon Live-Tracking',
              teaser: 'To make endurance sports events experienceable from a distance and at the same time optimise the safety of the athletes - is that possible? Yes, by developing a responsive, web-based sports tracking application with integrated SOS function for the athletes.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900023/jerry-website-assets/sports_tracking_hero_startseite_iu2f3i.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900025/jerry-website-assets/sports_tracking_hero_loop_dnawx1.mp4',
                posterSrc: ''
              },
              headline: 'Where is Horst?',
              infoText: [
                {
                  headline: 'WHY—What has driven us?',
                  text: 'As management partner of the professional triathlon team TEAM SPORT FOR GOOD, we were challenged to accompany endurance events with media coverage. When one of our athletes, Horst Reichel, suddenly didn’t show up at Ironman Arizona at any intermediate time, we asked ourselves for several hours: “Where is Horst?”. Only in the evening he could inform us about his defect on the bike course.<br>The motivation was aroused. In the age of 4G and geo-tracking it had to be possible to permanently record the locations of athletes. We contacted a live tracking device provider from motor sports (LiveRank), approached Deutsche Telekom together and tackled the first GPS-based triathlon live tracking in a team - and this at one of the biggest events in the world, the “Challenge Roth.”'
                },
                {
                  headline: 'HOW—How did we deal with the challenges?',
                  text: 'Our part was to develop a responsive web-platform that works for both the people at home and the fans at the track. In addition, the application should serve the safety of the athletes by an integrated SOS function. And of course the platform had to be adaptable for further events.<br>So there were several challenges:<ul><li>Creating individual routes - also through woods and meadows</li><li>Compensation of GPS fluctuations for a smooth display</li><li>Applicability for single starters and relay teams</li><li>Short-term adaptability of route or participant data in the CMS</li><li>Our own claim: Best possible infotainment for the users</li></ul><br>As the available mapping services did not cover the project requirements, we developed a method for interpolating location-based data on user-defined routes (track matching), which allowed us to integrate necessary business logic such as checkpoints, lap acquisition, signal loss areas, etc. Since this was a prototype project under high time pressure, we proceeded iteratively and in constant coordination with the hardware developers and Deutsche Telekom.'
                },
                {
                  headline: 'WHAT—What was the result?',
                  text: 'The result was a successful deployment at the Challenge Roth 2016 with the premiere of a responsive infotainment application which, in addition to the athlete visualization, was able to display race-relevant data such as speed, position, lap number, distances to the finish/leader/front man, network/GPS signal strength and SOS position live.'
                }
              ],
              clients: [
                'Telekom Deutschland GmbH'
              ],
              partners: [
                'SAS Technologies (Live Rank) and the DATEV Challenge Roth'
              ],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330357/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900022/jerry-website-assets/sports_tracking_tk_a_ea7ily.png',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330457/jerry-website-assets/sports_tracking_tk_b_u8f5vq.png',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1595330498/jerry-website-assets/sports_tracking_tk_c_hytakt.png',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Digital interactive 3D presentation for visions in sports',
                description: 'Innovative showcase of a sports facility as a web presentation and 3D facility walkthrough'
              },
              url: 'sport-visions',
              title: 'Sport Visions',
              subline: 'Digital interactive presentation platform',
              teaser: 'How do we present something that does not yet exist? We collect facts, create the story, visualize it in a contemporary way and bundle the content digitally, interactively and web-based.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900030/jerry-website-assets/sports_visions_hero_startseite_jcmupx.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: true,
                  loop: true,
                  muted: true,
                  controls: false
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900032/jerry-website-assets/sports_visions_fuse_hero_ipdl6s.mp4',
                posterSrc: ''
              },
              headline: 'Fuse—The gym of the future',
              infoText: [
                {
                  headline: 'WHY—What inspired us?',
                  text: 'Obviously our partner company, Medientools Solutions GmbH, had not done such a bad job. Their references in the field of interactive 3D building visualization aroused the interest of Sportplan GmbH, which specializes in consulting, development and operation of innovative sports facilities and wanted to install the "gym of the future" with their FUSE concept. We were immediately inspired by the mission to seamlessly unite young people around extreme sports on one site. It was necessary to develop an adequate pitch presentation to attract investors and sponsors for the realization.'
                },
                {
                  headline: 'HOW—How did we proceed?',
                  text: 'So we combined our sports and marketing know-how and staged the gym of the future together with our 3D artists and developers.<br>The basis of our work were 2D architectural plans of the entire facility. These had to be constructed virtually as a 3D model, designed futuristically and made tangible through an interactive “walk-through navigation”.<br>Since the FUSE concept also includes numerous digital elements, such as the FUSE Media-Lab, in which the athletes could edit and distribute their own content, there was no question that our pitch deck, web-based and interactive, also had to be designed. In addition to the visualization of the facility, we bundled all other content, such as information on social relevance, mafo data and business plan on a responsive online presentation platform.'
                },
                {
                  headline: 'WHAT—What was the result?',
                  text: 'What began with the idea of a PowerPoint presentation became an interactive, web-based presentation platform in a futuristic design, which was also ennobled as a pitchdeck benchmark at the board level of major sporting goods companies.'
                }
              ],              
              clients: [
                'Sportplan GmbH'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900027/jerry-website-assets/sports_visions_fuse_a_sswo8m.jpg',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900027/jerry-website-assets/sports_visions_fuse_b_obvjbl.jpg',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900031/jerry-website-assets/sports_visions_fuse_c_nqgara.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Sports Business Management Software and Applications',
                description: 'Jerry Digital develops modular, scalable and solution-oriented IT systems and applications for process optimization in the sports business.'
              },
              url: 'sport-management-applications',
              title: 'Sport Management Applications',
              subline: 'IT system development',
              teaser: 'Even essential in sports business - how can processes be optimized sustainably? We develop modular, scalable and solution-oriented IT systems and applications.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
              introMedia: {
                type: 'img',
                settings: {},
                src: {
                  default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                  mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900036/jerry-website-assets/sports_management_tools_hero_ghclp7.jpg',
                }
              },
              headline: 'Back to the roots',
              infoText: [
                {
                  headline: 'WHY—Why were we the right ones?',
                  text: 'For sports students there was and still is a very attractive job provider: cip marketing GmbH. We were part of the cip team at that time and were able to accompany numerous trade and event marketing measures for major sports brands such as Adidas, Salomon, Reebok and Co. Because we always remain somehow connected to each other in the sports family and because we still know the demands on the cip agency business, we were allowed to develop an upgrade for the outdated web-based cip ERP system, which no longer met the current agency requirements in terms of complex user interfaces, mobile use and long loading times.'
                },
                {
                  headline: 'HOW—How did we proceed?',
                  text: 'The first step was to create an assessment of the existing ERP system. The neutral assessment showed that the existing functionality, the planned improvements and the desired performance boost could not be achieved with the existing legacy system. Even established ERP systems would not be able to solve this “out of the box”. For this reason, the decision was made to develop a completely new system.<br>In advance, we created a state-of-the-art prototype. This demonstrated the smooth display of large amounts of data, rapid complex data queries and real-time updates in an attractive user interface.<br>To optimally support cip’s work processes, we chose an agile project management methodology with a sprint-based module-by-module implementation. Our agile development team consists of full-stack developers who work simultaneously on the front- and back-end implementation of new functions. We offer flexible team sizes to be able to react efficiently and resource-saving to peak and down times in the development process. An integrated core team of project managers, software architects and developers allows us to react quickly to new customer requirements.'
                },
                {
                  headline: 'WHAT—What is the product?',
                  text: 'Jerry Digital developed a custom system that is already in operation for individual customers and regions and is about to be rolled out in general. It can be used to fully manage all processes in the areas of human resources, project management, schedule coordination, finance, POS/event promotions, etc. In addition to the desktop application, an Ionic-based Progressive Web App (PWA) was created for external employees (brand ambassadors). About the technology: Based on Node.js, an API and a service-centric modular backend was created. We used Angular as a comprehensive front-end framework for the various applications. With Material Design a widely used design system was chosen for the user interface of the ERP system.'
                }
              ],              
              clients: [
                'cip marketing GmbH'
              ],
              partners: [],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900034/jerry-website-assets/sports_management_tools_a_nwy7vf.jpg',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900035/jerry-website-assets/sports_management_tools_b_k6oxeh.jpg',
                  },
                  subline: ''
                }
              ]
            },
            {
              meta: {
                title: 'Jerry | Digital video concepts in sports',
                description: 'Jerry Digital combines brand expertise, platform know-how, access to protagonists and efficient production to create multifunctional digital products.'
              },
              url: 'sports-content',
              title: 'Sports Content',
              subline: 'Digital Image Clip',
              teaser: 'Creating an emotional means of communication with maximum efficiency in the shortest possible time - how is that possible? We bundle brand competence, platform know-how, direct access to protagonists as well as targeted hands-on production and create multifunctional digital products out of it.',
              indexImg: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900046/jerry-website-assets/sports_content_am_hero_startseite_a4qyyf.jpg',
              introMedia: {
                type: 'video',
                settings: {
                  autoplay: false,
                  loop: false,
                  muted: false,
                  controls: true
                },
                src: 'https://res.cloudinary.com/mt-website-dv7jumlqa/video/upload/v1594900100/jerry-website-assets/sports_content_am_hero_kqqpcb.mp4',
                posterSrc: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900052/jerry-website-assets/sports_content_am_poster_2560x1440_v9azi9.jpg'
              },
              headline: 'My name is Gandl - Stephan Gandl!',
              infoText: [
                {
                  headline: 'WHY—Why were we contacted?',
                  text: 'Like many other brands, Aston Martin’s global brand communication department decided to rejuvenate its brand with an aggressive and stylish campaign to appeal to tomorrow’s customers. What is certainly correct in principle, however, only helped the trade to a limited extent when it came to addressing their regular customers and core target group emotionally. What was needed, therefore, was a target group-compliant content format that served as a digital communication and promotion tool for retailers. That’s where Jerry Digital came in. We were allowed to combine and contribute our sports, brand and technology know-how.'
                },
                {
                  headline: 'HOW—How did we proceed?',
                  text: 'Due to budgetary constraints, we decided on a multifunctional trailer that combines the two worlds of Aston Martin "sportiness" and "precision". Hardly any other sport conveys these values better than golf. And because it was also a question of conveying these core messages in an entertaining way, we needed an appropriate protagonist and an authentic story. With golf professional Stephan Gandl, we found the perfect cast from our network. The former tour player and one of the scene’s best trick golfers combines the sports and business worlds like no other, making him the perfect ambassador for the core target group. And because Stephan also makes a good dresser, the story was clear: "My name is Gandl - Stephan Gandl!'
                },
                {
                  headline: 'WHAT—What has come out of it?',
                  text: 'In just one day of shooting with minimal production effort, an emotional trailer was created that is used multifunctionally: In retail, in golf clubs, at golf events, for direct digital addressing of customers and, of course, target-oriented via social channels.<br>From our point of view a case that demonstrates the efficiency and bundling of Jerry Digital’s three areas of expertise.'
                }
              ],              
              clients: [
                'Aston Martin Munich'
              ],
              partners: [
                'LG42 GmbH'
              ],
              media: [
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900051/jerry-website-assets/sports_content_am_a_gyhii5.jpg',
                  },
                  subline: ''
                }, {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900050/jerry-website-assets/sports_content_am_b_vc70we.jpg',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900049/jerry-website-assets/sports_content_am_d_cajwur.jpg',
                  },
                  subline: ''
                },
                {
                  type: 'img',
                  settings: {},
                  src: {
                    default: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_2560/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw1441: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1440/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw1025: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_1024/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw769: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_768/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw426: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                    mw0: 'https://res.cloudinary.com/mt-website-dv7jumlqa/image/upload/t_jerry_w_425/v1594900048/jerry-website-assets/sports_content_am_e_fhggz6.jpg',
                  },
                  subline: ''
                }
              ]
            }
          ],
        }
      },
      imprint: {
        de: {
          meta: {
            title: 'Jerry | Impressum',
          },
          text: `
          <h1>Impressum</h1>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>Wir sind Jerry GmbH<br>
          Liebherrstraße 5<br>
          80538 München</p>

          <p>Handelsregister: HRB 231281<br>
          Registergericht: Amstgericht München</p>

          <p><strong>Vertreten durch:</strong><br>
          Thomas Wagner</p>

          <h2>Kontakt</h2>
          <p>Telefon: +49 89 558 989 58‬<br>
          E-Mail: hallo@wirsindjerry.de</p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
          DE 310927054</p>

          <h2>Gestaltung</h2>
          <p><a href="https://hellofarm.de">hellofarm Design Studio</a></p>

          <h2>Programmierung</h2>
          <p><a href="https://tilgner-kempf.com">Sebastian Kempf</a></p>

          <h2>EU-Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2><p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h3>Haftung für Inhalte</h3> <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h3>Haftung für Links</h3> <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          `
        },
        en: {
          meta: {
            title: 'Jerry | Site Notice',
          },
          text: `
          <h1>Site Notice</h1>
          <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
          <p>Wir sind Jerry GmbH<br>
          Liebherrstraße 5<br>
          80538 München</p>

          <p>Commercial Register: HRB 231281<br>
          Registration court: Amstgericht München</p>

          <p><strong>Represented by:</strong><br>
          Thomas Wagner</p>

          <h2>Contact</h2>
          <p>Phone: +49 89 558 989 58‬<br>
          E-mail: hallo@wirsindjerry.de</p>

          <h2>VAT ID</h2>
          <p>Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br>
          DE 310927054</p>

          <h2>Design</h2>
          <p><a href="https://hellofarm.de">hellofarm Design Studio</a></p>

          <h2>Programming</h2>
          <p><a href="https://tilgner-kempf.com">Sebastian Kempf</a></p>

          <h2>EU dispute resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br> Our e-mail address can be found above in the site notice.</p>

          <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2><p>We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>

          <h3>Liability for Contents</h3> <p>As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p> <p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p> <h3>Liability for Links</h3> <p>Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p> <p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p> <h3>Copyright</h3> <p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.<br> The commercial use of our contents without permission of the originator is prohibited.</p> <p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>
          `
        }
      },
      privacyPolicy: {
        de: {
          meta: {
            title: 'Jerry | Datenschutzerklärung',
          },
          text: `
            <h1>Datenschutz­erklärung</h1>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            <h3>Datenerfassung auf dieser Website</h3> <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p> <p><strong>Wie erfassen wir Ihre Daten?</strong></p> <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <p><strong>Wofür nutzen wir Ihre Daten?</strong></p> <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p> <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            <h3>Analyse-Tools und Tools von Dritt­anbietern</h3> <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p> <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
            <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3>Externes Hosting</h3> <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p> <p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p> <p>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
            <p><strong>Abschluss eines Vertrages über Auftragsverarbeitung</strong></p> <p>Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.</p>
            <h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
            <h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
            <h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p> <p>Wir sind Jerry GmbH<br />
            Liebherrstraße 5<br />
            80538 München</p>

            <p>Telefon: +49 89 558 989 58‬<br />
            E-Mail: hallo@wirsindjerry.de</p>
             <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
            <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
            <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3> <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
            <h3>Recht auf Daten­übertrag­barkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
            <h3>SSL- bzw. TLS-Verschlüsselung</h3> <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
            <h3>Auskunft, Löschung und Berichtigung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            <h3>Recht auf Einschränkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p> <ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul> <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3> <p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p> <p>Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p> <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p> <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p> <p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3> <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p> <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
            <h2>5. Soziale Medien</h2>
            <h3>Facebook Plugins (Like & Share-Button)</h3> <p>Auf dieser Website sind Plugins des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.</p> <p>Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem „Like-Button“ („Gefällt mir“) auf dieser Website. Eine Übersicht über die Facebook Plugins finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p> <p>Wenn Sie diese Website besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button“ anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/privacy/explanation</a>.</p> <p>Wenn Sie nicht wünschen, dass Facebook den Besuch dieser Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p> <p>Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
            <h3>Instagram Plugin</h3> <p>Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert.</p> <p>Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.</p> <p>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer">https://instagram.com/about/legal/privacy/</a>.</p>
            <h3>LinkedIn Plugin</h3> <p>Diese Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA.</p> <p>Bei jedem Abruf einer Seite dieser Website, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie diese Website mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Recommend-Button“ von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf dieser Website Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.</p> <p>Die Verwendung des LinkedIn-Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>.</p>
            <h2>6. Analyse-Tools und Werbung</h2>
            <h3>Google Analytics</h3> <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z.B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden von Google ggf. in einem Profil zusammengefasst, das dem jeweiligen Nutzer bzw. dessen Endgerät zugeordnet ist.</p> <p>Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z.B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p> <p>Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p><strong>IP Anonymisierung</strong></p> <p>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
             <p><strong>Browser Plugin</strong></p> <p>Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p> <p>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p><p><strong>Auftragsverarbeitung</strong></p> <p>Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</p>
            <p><strong>Speicherdauer</strong></p> <p>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter folgendem Link: <a href="https://support.google.com/analytics/answer/7667196?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=de</a></p>

            <h3>IONOS WebAnalytics</h3> <p>Diese Website nutzt die Analysedienste von IONOS WebAnalytics (im Folgenden: IONOS). Anbieter ist die 1&1 IONOS SE, Elgendorfer Straße 57, D – 56410 Montabaur. Im Rahmen der Analysen mit IONOS können u. a. Besucherzahlen und –verhalten (z. B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs, Absprungraten), Besucherquellen (d. h., von welcher Seite der Besucher kommt), Besucherstandorte sowie technische Daten (Browser- und Betriebssystemversionen) analysiert werden. Zu diesem Zweck speichert IONOS insbesondere folgende Daten:</p> <ul> <li>Referrer (zuvor besuchte Webseite)</li> <li>angeforderte Webseite oder Datei</li> <li>Browsertyp und Browserversion</li> <li>verwendetes Betriebssystem</li> <li>verwendeter Gerätetyp</li> <li>Uhrzeit des Zugriffs</li> <li>IP-Adresse in anonymisierter Form (wird nur zur Feststellung des Orts des Zugriffs verwendet)</li> </ul> <p>Die Datenerfassung erfolgt laut IONOS vollständig anonymisiert, sodass sie nicht zu einzelnen Personen zurückverfolgt werden kann. Cookies werden von IONOS WebAnalytics nicht gespeichert.</p> <p>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der statistischen Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen zur Datenerfassung und Verarbeitung durch IONOS WebAnalytics entnehmen Sie der Datenschutzerklärung von IONOS unter folgendem Link:</p> <p><a href="https://www.ionos.de/terms-gtc/index.php?id=6" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/index.php?id=6</a></p>
            <h3>Google Ads</h3> <p>Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z.B. Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie viele Anzeigen zu entsprechenden Klicks geführt haben.</p> <p>Die Nutzung von Google Ads erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst effektiven Vermarktung seiner Dienstleistung Produkte.</p>
            <h3>Google Conversion-Tracking</h3> <p>Diese Website nutzt Google Conversion Tracking. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Mit Hilfe von Google-Conversion-Tracking können Google und wir erkennen, ob der Nutzer bestimmte Aktionen durchgeführt hat. So können wir beispielsweise auswerten, welche Buttons auf unserer Website wie häufig geklickt und welche Produkte besonders häufig angesehen oder gekauft wurden. Diese Informationen dienen dazu, Conversion-Statistiken zu erstellen. Wir erfahren die Gesamtanzahl der Nutzer, die auf unsere Anzeigen geklickt haben und welche Aktionen sie durchgeführt haben. Wir erhalten keine Informationen, mit denen wir den Nutzer persönlich identifizieren können. Google selbst nutzt zur Identifikation Cookies oder vergleichbare Wiedererkennungstechnologien.</p> <p>Die Nutzung von Google Conversion-Tracking erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Mehr Informationen zu Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
            <h2>7. Audio- und Videokonferenzen</h2>
            <p><strong>Datenverarbeitung</strong></p> <p>Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.</p> <p>Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen“ im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).</p> <p>Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.</p> <p>Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/ Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.</p> <p>Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben. </p> <p><strong>Zweck und Rechtsgrundlagen</strong></p> <p>Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 S. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar. </p> <p><strong>Speicherdauer</strong></p> <p>Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.</p> <p>Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.</p> <p><strong>Eingesetzte Konferenz-Tools</strong></p> <p>Wir setzen folgende Konferenz-Tools ein:</p>
            <h3>Zoom</h3> <p>Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113. Zoom verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Zoom: <a href="https://zoom.us/de-de/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/de-de/privacy.html</a>.</p>
            <h3>Skype for Business</h3> <p>Wir nutzen Skype for Business. Anbieter ist Skype Communications SARL, 23-29 Rives de Clausen, L-2165 Luxembourg. Skype verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Skype: <a href="https://privacy.microsoft.com/de-de/privacystatement/" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/de-de/privacystatement/</a>.</p>
            <h3>GoToMeeting</h3> <p>Wir nutzen GoToMeeting. Anbieter ist die LogMeIn, Inc., 320 Summer Street Boston, MA 02210, USA. GoToMeeting verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von GoToMeeting: <a href="https://www.logmeininc.com/de/legal/privacy" target="_blank" rel="noopener noreferrer">https://www.logmeininc.com/de/legal/privacy</a>.</p>
            <h3>Microsoft Teams</h3> <p>Wir nutzen Microsoft Teams. Anbieter ist die Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA. Microsoft Teams verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Microsoft Teams: <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/de-de/privacystatement</a>.</p>
            <h3>Google Hangouts</h3> <p>Wir nutzen Google Hangouts. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Hangouts verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Google Hangouts: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
            <h3>Google Meet</h3> <p>Wir nutzen Google Meet. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
            <h3>Unsere Social–Media–Auftritte</h3> <h4>Datenverarbeitung durch soziale Netzwerke</h4> <p>Wir unterhalten öffentlich zugängliche Profile in sozialen Netzwerken. Die im Einzelnen von uns genutzten sozialen Netzwerke finden Sie weiter unten.</p> <p>Soziale Netzwerke wie Facebook, Twitter etc. können Ihr Nutzerverhalten in der Regel umfassend analysieren, wenn Sie deren Website oder eine Website mit integrierten Social-Media-Inhalten (z. B. Like-Buttons oder Werbebannern) besuchen. Durch den Besuch unserer Social-Media-Präsenzen werden zahlreiche datenschutzrelevante Verarbeitungsvorgänge ausgelöst. Im Einzelnen:</p> <p>Wenn Sie in Ihrem Social-Media-Account eingeloggt sind und unsere Social-Media-Präsenz besuchen, kann der Betreiber des Social-Media-Portals diesen Besuch Ihrem Benutzerkonto zuordnen. Ihre personenbezogenen Daten können unter Umständen aber auch dann erfasst werden, wenn Sie nicht eingeloggt sind oder keinen Account beim jeweiligen Social-Media-Portal besitzen. Diese Datenerfassung erfolgt in diesem Fall beispielsweise über Cookies, die auf Ihrem Endgerät gespeichert werden oder durch Erfassung Ihrer IP-Adresse.</p> <p>Mit Hilfe der so erfassten Daten können die Betreiber der Social-Media-Portale Nutzerprofile erstellen, in denen Ihre Präferenzen und Interessen hinterlegt sind. Auf diese Weise kann Ihnen interessenbezogene Werbung in- und außerhalb der jeweiligen Social-Media-Präsenz angezeigt werden. Sofern Sie über einen Account beim jeweiligen sozialen Netzwerk verfügen, kann die interessenbezogene Werbung auf allen Geräten angezeigt werden, auf denen Sie eingeloggt sind oder eingeloggt waren.</p> <p>Bitte beachten Sie außerdem, dass wir nicht alle Verarbeitungsprozesse auf den Social-Media-Portalen nachvollziehen können. Je nach Anbieter können daher ggf. weitere Verarbeitungsvorgänge von den Betreibern der Social-Media-Portale durchgeführt werden. Details hierzu entnehmen Sie den Nutzungsbedingungen und Datenschutzbestimmungen der jeweiligen Social-Media-Portale.</p> <p><strong>Rechtsgrundlage</strong></p> <p>Unsere Social-Media-Auftritte sollen eine möglichst umfassende Präsenz im Internet gewährleisten. Hierbei handelt es sich um ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO. Die von den sozialen Netzwerken initiierten Analyseprozesse beruhen ggf. auf abweichenden Rechtsgrundlagen, die von den Betreibern der sozialen Netzwerke anzugeben sind (z. B. Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO).</p> <p><strong>Verantwortlicher und Geltendmachung von Rechten</strong></p> <p>Wenn Sie einen unserer Social-Media-Auftritte (z. B. Facebook) besuchen, sind wir gemeinsam mit dem Betreiber der Social-Media-Plattform für die bei diesem Besuch ausgelösten Datenverarbeitungsvorgänge verantwortlich. Sie können Ihre Rechte (Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Beschwerde) grundsätzlich sowohl ggü. uns als auch ggü. dem Betreiber des jeweiligen Social-Media-Portals (z. B. ggü. Facebook) geltend machen.</p> <p>Bitte beachten Sie, dass wir trotz der gemeinsamen Verantwortlichkeit mit den Social-Media-Portal-Betreibern nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der Social-Media-Portale haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters.</p> <p><strong>Speicherdauer</strong></p> <p>Die unmittelbar von uns über die Social-Media-Präsenz erfassten Daten werden von unseren Systemen gelöscht, sobald der Zweck für ihre Speicherung entfällt, Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Bestimmungen – insb. Aufbewahrungsfristen – bleiben unberührt.</p> <p>Auf die Speicherdauer Ihrer Daten, die von den Betreibern der sozialen Netzwerke zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der sozialen Netzwerke (z. B. in deren Datenschutzerklärung, siehe unten).</p> <h4>Soziale Netzwerke im Einzelnen</h4>
            <p><strong>Facebook</strong></p> <p>Wir verfügen über ein Profil bei Facebook. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook auch in die USA und in andere Drittländer übertragen.</p>  <p>Wir haben mit Facebook eine Vereinbarung über gemeinsame Verarbeitung (Controller Addendum) geschlossen. In dieser Vereinbarung wird festgelegt, für welche Datenverarbeitungsvorgänge wir bzw. Facebook verantwortlich ist, wenn Sie unsere Facebook-Page besuchen. Diese Vereinbarung können Sie unter folgendem Link einsehen: <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/terms/page_controller_addendum</a>.</p>
             <p><strong>Sie können Ihre Werbeeinstellungen selbstständig in Ihrem Nutzer-Account anpassen. Klicken Sie hierzu auf folgenden Link und loggen Sie sich ein:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings?tab=ads</a>.</p> <p>Details entnehmen Sie der Datenschutzerklärung von Facebook: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/about/privacy/</a>.</p>
            <p><strong>Instagram</strong></p> <p>Wir verfügen über ein Profil bei Instagram. Anbieter ist die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA. Details zu deren Umgang mit Ihren personenbezogenen Daten entnehmen Sie der Datenschutzerklärung von Instagram: <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a>.</p>
            <p><strong>LinkedIn</strong></p> <p>Wir verfügen über ein Profil bei LinkedIn. Anbieter ist die LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland. LinkedIn verfügt über eine Zertifizierung nach dem EU-US-Privacy-Shield. LinkedIn verwendet Werbecookies.</p> <p><strong>Wenn Sie LinkedIn-Werbe-Cookies deaktivieren möchten, nutzen Sie bitte folgenden Link: </strong><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</p> <p>Details zu deren Umgang mit Ihren personenbezogenen Daten entnehmen Sie der Datenschutzerklärung von LinkedIn: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>.</p>
          `
        },
        en: {
          meta: {
            title: 'Jerry | Privacy Policy',
          },
          text: `
            <h1>Privacy Policy</h1>
            <h2>1. An overview of data protection</h2>
            <h3>General information</h3> <p>The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.</p>
            <h3>Data recording on this website</h3> <p><strong>Who is the responsible party for the recording of data on this website (i.e. the “controller”)?</strong></p> <p>The data on this website is processed by the operator of the website, whose contact information is available under section “Information Required by Law” on this website.</p> <p><strong>How do we record your data?</strong></p> <p>We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.</p> <p>Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g. web browser, operating system or time the site was accessed). This information is recorded automatically when you access this website.</p> <p><strong>What are the purposes we use your data for?</strong></p> <p>A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.</p> <p><strong>What rights do you have as far as your information is concerned?</strong></p> <p>You have the right to receive information about the source, recipients and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.</p> <p>Please do not hesitate to contact us at any time under the address disclosed in section “Information Required by Law” on this website if you have questions about this or any other data protection related issues.</p>
            <h3>Analysis tools and tools provided by third parties</h3> <p>There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.</p> <p>For detailed information about these analysis programs please consult our Data Protection Declaration below.</p>
            <h2>2. Hosting and Content Delivery Networks (CDN)</h2>
            <h3>External Hosting</h3> <p>This website is hosted by an external service provider (host). Personal data collected on this website are stored on the servers of the host. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract information, contact information, names, web page access, and other data generated through a web site.</p> <p>The host is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online services by a professional provider (Art. 6 para. 1 lit. f GDPR).</p> <p>Our host will only process your data to the extent necessary to fulfil its performance obligations and to follow our instructions with respect to such data.</p>
            <p><strong>Execution of a contract data processing agreement</strong></p> <p>In order to guarantee processing in compliance with data protection regulations, we have concluded an order processing contract with our host.</p>
            <h2>3. General information and mandatory information</h2>
            <h3>Data protection</h3> <p>The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.</p> <p>Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.</p> <p>We herewith advise you that the transmission of data via the Internet (i.e. through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third party access.</p>
            <h3>Information about the responsible party (referred to as the “controller” in the GDPR)</h3> <p>The data processing controller on this website is:</p> <p>Wir sind Jerry GmbH<br />
            Liebherrstraße 5<br />
            80538 München</p>

            <p>Phone: +49 89 558 989 58‬<br />
            E-mail: hallo@wirsindjerry.de</p>
             <p>The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g. names, e-mail addresses, etc.).</p>
            <h3>Revocation of your consent to the processing of data</h3> <p>A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.</p>
            <h3>Right to object to the collection of data in special cases; right to object to direct advertising (Art. 21 GDPR)</h3> <p>IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6 SECT. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21 SECT. 1 GDPR).</p> <p>IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21 SECT. 2 GDPR).</p>
            <h3>Right to log a complaint with the competent supervisory agency</h3> <p>In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.</p>
            <h3>Right to data portability</h3> <p>You have the right to demand that we hand over any data we automatically process on the basis of your consent or in order to fulfil a contract be handed over to you or a third party in a commonly used, machine readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.</p>
            <h3>SSL and/or TLS encryption</h3> <p>For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption program. You can recognize an encrypted connection by checking whether the address line of the browser switches from “http://” to “https://” and also by the appearance of the lock icon in the browser line.</p> <p>If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.</p>
            <h3>Information about, rectification and eradication of data</h3> <p>Within the scope of the applicable statutory provisions, you have the right to at any time demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time at the address provided in section “Information Required by Law.”</p>
            <h3>Right to demand processing restrictions</h3> <p>You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time at the address provided in section “Information Required by Law.” The right to demand restriction of processing applies in the following cases:</p> <ul> <li>In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data.</li> <li>If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data in lieu of demanding the eradication of this data.</li> <li>If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.</li> <li>If you have raised an objection pursuant to Art. 21 Sect. 1 GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data.</li> </ul> <p>If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.</p>
            <h2>4. Recording of data on this website</h2>
            <h3>Cookies</h3> <p>Our websites and pages use what the industry refers to as “cookies.” Cookies are small text files that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them or they are automatically eradicated by your web browser.</p> <p>In some cases it is possible that third party cookies are stored on your device once you enter our site (third party cookies). These cookies enable you or us to take advantage of certain services offered by the third party (e.g. cookies for the processing of payment services).</p> <p>Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of the cookies (e.g. the shopping cart function or the display of videos). The purpose of other cookies may be the analysis of user patterns or the display of promotional messages.</p> <p>Cookies, which are required for the performance of electronic communication transactions (required cookies) or for the provision of certain functions you want to use (functional cookies, e.g. for the shopping cart function) or those that are necessary for the optimization of the website (e.g. cookies that provide measurable insights into the web audience), shall be stored on the basis of Art. 6 Sect. 1 lit. f GDPR, unless a different legal basis is cited. The operator of the website has a legitimate interest in the storage of cookies to ensure the technically error free and optimized provision of the operator’s services. If your consent to the storage of the cookies has been requested, the respective cookies are stored exclusively on the basis of the consent obtained (Art. 6 Sect. 1 lit. a GDPR); this consent may be revoked at any time.</p> <p>You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete function for the automatic eradication of cookies when the browser closes. If cookies are deactivated, the functions of this website may be limited.</p> <p>In the event that third party cookies are used or if cookies are used for analytical purposes, we will separately notify you in conjunction with this Data Protection Policy and, if applicable, ask for your consent.</p>
            <h3>Request by e-mail, telephone or fax</h3> <p>If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.</p> <p>These data are processed on the basis of Art. 6 Sect. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures. In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6 Sect. 1 lit. f GDPR) or on the basis of your consent (Art. 6 Sect. 1 lit. a GDPR) if it has been obtained.</p> <p>The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.</p>
            <h2>5. Social media</h2>
            <h3>Facebook plug-ins (Like & Share button)</h3> <p>We have integrated plug-ins of the social network Facebook on this website. The provider of this service is Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland. According to Facebook’s statement the collected data will be transferred to the USA and other third-party countries too.</p> <p>You will be able to recognize Facebook plug-ins by the Facebook logo or the “Like” button on this website. An overview of the Facebook plug-ins is available under the following link: <a href="https://developers.facebook.com/docs/plugins/" target="_blank" rel="noopener noreferrer">https://developers.facebook.com/docs/plugins/</a>.</p> <p>Whenever you visit this website and its pages, the plug-in will establish a direct connection between your browser and the Facebook server. As a result, Facebook will receive the information that you have visited this website with your plug-in. However, if you click the Facebook “Like” button while you are logged into your Facebook account, you can link the content of this website and its pages with your Facebook profile. As a result, Facebook will be able to allocate the visit to this website and its pages to your Facebook user account. We have to point out, that we as the provider of the website do not have any knowledge of the transferred data and its use by Facebook. For more detailed information, please consult the Data Privacy Declaration of Facebook at: <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/explanation</a>.</p> <p>If you do not want Facebook to be able to allocate your visit to this website and its pages to your Facebook user account, please log out of your Facebook account while you are on this website.</p> <p>The use of the Facebook plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the website has a legitimate interest in being as visible as possible on social media. If a respective declaration of consent has been obtained, the data shall be processed exclusively on the basis of Art. 6 Sect. 1 lit. a GDPR. This declaration of consent may be revoked at any time.</p>
            <h3>Instagram plug-in</h3> <p>We have integrated functions of the public media platform Instagram into this website. These functions are being offered by Instagram Inc., 1601 Willow Road, Menlo Park, CA 94025, USA.</p> <p>If you are logged into your Instagram account, you may click the Instagram button to link contents from this website to your Instagram profile. This enables Instagram to allocate your visit to this website to your user account. We have to point out that we as the provider of the website and its pages do not have any knowledge of the content of the data transferred and its use by Instagram.</p> <p>Data are stored and analyzed on the basis of Art. 6 Sect. 1 lit. f GDPR. The website operator has a legitimate interest in the highest possible visibility on social media. If a respective declaration of consent has been obtained, the data will be processed exclusively on the basis of Art. 6 Sect. 1 lit. a DGDPR. Any such consent may be revoked at any time.</p> <p>For more information on this subject, please consult Instagram’s Data Privacy Declaration at: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer">https://instagram.com/about/legal/privacy/</a>.</p>
            <h3>LinkedIn plug-in</h3> <p>This website uses functions of the LinkedIn network. The provider is LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA.</p> <p>Any time you access a page of this website that contains functions of LinkedIn, a connection to LinkedIn’s servers is established. LinkedIn is notified that you have visited this website with your IP address. If you click on LinkedIn’s “Recommend” button and are logged into your LinkedIn account at the time, LinkedIn will be in a position to allocate your visit to this website to your user account. We have to point out that we as the provider of the websites do not have any knowledge of the content of the transferred data and its use by LinkedIn.</p> <p>The use of the LinkedIn plug-in is based on Art. 6 Sect. 1 lit. f GDPR. The operator of the website has a legitimate interest in being as visible as possible on social media. If a respective declaration of consent has been obtained, the data shall be processed exclusively on the basis of Art. 6 Sect. 1 lit. a GDPR. This declaration of consent may be revoked at any time.</p> <p>For further information on this subject, please consult LinkedIn’s Data Privacy Declaration at: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>.</p>
            <h2>6. Analysis tools and advertising</h2>
            <h3>Google Analytics</h3> <p>This website uses functions of the web analysis service Google Analytics. The provider of this service is Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.</p> <p>Google Analytics enables the website operator to analyze the behavior patterns of website visitors. To that end, the website operator receives a variety of user data, such as pages accessed, time spent on the page, the utilized operating system and the user’s origin. Google may consolidate these data in a profile that is allocated to the respective user or the user’s device.</p> <p>Google Analytics uses technologies that make the recognition of the user for the purpose of analyzing the user behavior patterns (e.g. cookies or device fingerprinting). The website use information recorded by Google is, as a rule transferred to a Google server in the United States, where it is stored.</p> <p>This analysis tool is used on the basis of Art. 6 Sect. 1 lit. f GDPR. The operator of this website has a legitimate interest in the analysis of user patterns to optimize both, the services offered online and the operator’s advertising activities. If a corresponding agreement has been requested (e.g. an agreement to the storage of cookies), the processing takes place exclusively on the basis of Art. 6 para. 1 lit. a GDPR; the agreement can be revoked at any time.</p> <p><strong>IP anonymization</strong></p> <p>On this website, we have activated the IP anonymization function. As a result, your IP address will be abbreviated by Google within the member states of the European Union or in other states that have ratified the Convention on the European Economic Area prior to its transmission to the United States. The full IP address will be transmitted to one of Google’s servers in the United States and abbreviated there only in exceptional cases. On behalf of the operator of this website, Google shall use this information to analyze your use of this website to generate reports on website activities and to render other services to the operator of this website that are related to the use of the website and the Internet. The IP address transmitted in conjunction with Google Analytics from your browser shall not be merged with other data in Google’s possession.</p>
             <p><strong>Browser plug-in</strong></p> <p>You can prevent the recording and processing of your data by Google by downloading and installing the browser plugin available under the following link: <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=en</a>.</p> <p>For more information about the handling of user data by Google Analytics, please consult Google’s Data Privacy Declaration at: <a href="https://support.google.com/analytics/answer/6004245?hl=en" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=en</a>.</p><p><strong>Contract data processing</strong></p> <p>We have executed a contract data processing agreement with Google and are implementing the stringent provisions of the German data protection agencies to the fullest when using Google Analytics.</p>
            <p><strong>Archiving period</strong></p> <p>Data on the user or incident level stored by Google linked to cookies, user IDs or advertising IDs (e.g. DoubleClick cookies, Android advertising ID) will be anonymized or deleted after 14 month. For details please click the following link: <a href="https://support.google.com/analytics/answer/7667196?hl=en" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/7667196?hl=en</a></p>

            <h3>IONOS Web Analytics</h3> <p>This website uses IONOS WebAnalytics analysis services. The provider of these services is 1&1 IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, Germany. In conjunction with the performance of analyses by IONOS, it is possible to e.g. analyze the number of visitors and their behavior patterns during visits (e.g. number of pages accessed, duration of their visits to the website, percentage of aborted visits), visitor origins (i.e. from which site does the visitor arrive at our site), visitor locations as well as technical data (browser and session of operating system used). For these purposes, IONOS archives in particular the following data:</p> <ul> <li>Referrer (previously visited website)</li> <li>Accessed page on the website or file</li> <li>Browser type and browser version</li> <li>Used operating system</li> <li>Type of device used</li> <li>Website access time</li> <li>Anonymized IP address (used only to determine the access location)</li> </ul> <p>According to IONOS, the data recorded are completely anonymized so they cannot be tracked back to individuals. IONOS WebAnalytics does not archive cookies.</p> <p>The data are stored and analyzed pursuant to Art. 6 Sect. 1 lit. f GDPR. The operator of the website has a legitimate interest in the statistical analysis of user patterns to optimize both, the operator’s web presentation as well as the operator’s promotional activities. If a corresponding agreement has been requested, the processing takes place exclusively on the basis of Art. 6 para. 1 lit. a GDPR; the agreement can be revoked at any time.</p> <p>For more information affiliated with the recording and processing of data by IONOS WebAnalytics, please click on the following link of the data policy declaration:</p> <p><a href="https://www.ionos.de/terms-gtc/index.php?id=6" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/index.php?id=6</a>.</p>
            <h3>Google Ads</h3> <p>The website operator uses Google Ads. Google Ads is an online promotional program of Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.</p> <p>Google Ads enables us to display ads in the Google search engine or on third party websites, if the user enters certain search terms into Google (keyword targeting). It is also possible to place targeted ads based on the user data Google has in its possession (e.g. location data and interests; target group targeting). As the website operator, we can analyze these data quantitatively, for instance by analyzing which search terms resulted in the display of our ads and how many ads led to respective clicks.</p> <p>The use of Google Ads is based on  Art. 6 Sect. 1 lit. et seq. GDPR. The website operator has a legitimate interest in marketing the operator’s services and products as effectively as possible.</p>
            <h3>Google Conversion-Tracking</h3> <p>This website uses Google Conversion Tracking. The provider of this service is Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.</p> <p>With the assistance of Google Conversion Tracking we are in a position to recognize whether the user has completed certain actions. For instance, we can analyze the how frequently which buttons on our website have been clicked and which products are reviewed or purchased with particular frequency. The purpose of this information is to compile conversion statistics. We learn how many users have clicked on our ads and which actions they have completed. We do not receive any information that would allow us to personally identify the users. Google as such uses cookies or comparable recognition technologies for identification purposes.</p> <p>We use Google Conversion Tracking on the basis of Art. 6 Sect. 1 lit. et seq. GDPR. The operator of the website has a legitimate interest in the analysis of the user patterns with the aim of optimizing both, the operator’s web presentation and advertising. If a respective declaration of consent was requested (e.g. concerning the storage of cookies), processing shall occur exclusively on the basis of Art. 6 Sect. 1 lit. a GDPR; the given consent may be revoked at any time.</p> <p>For more information about Google Conversion Tracking, please review Google’s data protection policy at: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a></p>
            <h2>7. Online-based Audio and Video Conferences (Conference tools)</h2>
            <p><strong>Data processing</strong></p> <p>We use online conference tools, among other things, for communication with our customers. The tools we use are listed in detail below. If you communicate with us by video or audio conference using the Internet, your personal data will be collected and processed by the provider of the respective conference tool and by us. The conferencing tools collect all information that you provide/access to use the tools (email address and/or your phone number). Furthermore, the conference tools process the duration of the conference, start and end (time) of participation in the conference, number of participants and other “context information” related to the communication process (metadata).</p> <p>Furthermore, the provider of the tool processes all the technical data required for the processing of the online communication. This includes, in particular, IP addresses, MAC addresses, device IDs, device type, operating system type and version, client version, camera type, microphone or loudspeaker and the type of connection.</p> <p>Should content be exchanged, uploaded or otherwise made available within the tool, it is also stored on the servers of the tool provider. Such content includes, but is not limited to, cloud recordings, chat/ instant messages, voicemail uploaded photos and videos, files, whiteboards and other information shared while using the service.</p> <p>Please note that we do not have complete influence on the data processing procedures of the tools used. Our possibilities are largely determined by the corporate policy of the respective provider. Further information on data processing by the conference tools can be found in the data protection declarations of the tools used, and which we have listed below this text.</p> <p><strong>Purpose and legal bases</strong></p> <p>The conference tools are used to communicate with prospective or existing contractual partners or to offer certain services to our customers (Art. 6 para. 1 sentence 1 lit. b GDPR). Furthermore, the use of the tools serves to generally simplify and accelerate communication with us or our company (legitimate interest in the meaning of Art. 6 para. 1 lit. f GDPR). Insofar as consent has been requested, the tools in question will be used on the basis of this consent; the consent may be revoked at any time with effect from that date.</p> <p><strong>Duration of storage</strong></p> <p>Data collected directly by us via the video and conference tools will be deleted from our systems immediately after you request us to delete it, revoke your consent to storage, or the reason for storing the data no longer applies. Stored cookies remain on your end device until you delete them. Mandatory legal retention periods remain unaffected.</p> <p>We have no influence on the duration of storage of your data that is stored by the operators of the conference tools for their own purposes. For details, please contact directly the operators of the conference tools.</p> <p><strong>Conference tools used</strong></p> <p>We employ the following conference tools:</p>
            <h3>Zoom</h3> <p>We use Zoom. The provider of this service is Zoom Communications Inc, San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113. Zoom is certified according to the EU-US Privacy Shield. For details on data processing, please refer to Zoom's privacy policy: <a href="https://zoom.us/en-us/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/en-us/privacy.html</a>.</p>
            <h3>Skype for Business</h3> <p>We use Skype for Business. The provider is Skype Communications SARL, 23-29 Rives de Clausen, L-2165 Luxembourg. Skype is certified according to the EU-US Privacy Shield. Details of data processing can be found in Skype's privacy policy: <a href="https://privacy.microsoft.com/en-us/privacystatement/" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/en-us/privacystatement/</a>.</p>
            <h3>GoToMeeting</h3> <p>We use GoToMeeting. The provider is LogMeIn, Inc., 320 Summer Street Boston, MA 02210, USA GoToMeeting is certified under the EU-US Privacy Shield. For details on data processing, please see GoToMeeting's Privacy Policy: <a href="https://www.logmeininc.com/legal/privacy" target="_blank" rel="noopener noreferrer">https://www.logmeininc.com/legal/privacy</a>.</p>
            <h3>Microsoft Teams</h3> <p>We use Microsoft Teams. The provider is Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA. Microsoft Teams is certified according to the EU-US Privacy Shield. For details on data processing, please refer to the Microsoft Teams privacy policy: <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer">https://privacy.microsoft.com/en-us/privacystatement</a>.</p>
            <h3>Google Hangouts</h3> <p>We use Google Hangouts. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google Hangouts is certified according to the EU-US Privacy Shield. For details on data processing, please see the Google Hangouts privacy policy: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.</p>
            <h3>Google Meet</h3> <p>We use Google Meet. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google is certified according to the EU-US Privacy Shield. For details on data processing, please see the Google privacy policy: <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.</p>
            <h3>Our social media appearances</h3> <h4>Data processing through social networks</h4> <p>We maintain publicly available profiles in social networks. The individual social networks we use can be found below.</p> <p>Social networks such as Facebook, Google+ etc. can generally analyze your user behavior comprehensively if you visit their website or a website with integrated social media content (e.g. like buttons or banner ads). When you visit our social media pages, numerous data protection-relevant processing operations are triggered. In detail:</p> <p>If you are logged in to your social media account and visit our social media page, the operator of the social media portal can assign this visit to your user account. Under certain circumstances, your personal data may also be recorded if you are not logged in or do not have an account with the respective social media portal. In this case, this data is collected, for example, via cookies stored on your device or by recording your IP address.</p> <p>Using the data collected in this way, the operators of the social media portals can create user profiles in which their preferences and interests are stored. This way you can see interest-based advertising inside and outside of your social media presence. If you have an account with the social network, interest-based advertising can be displayed on any device you are logged in to or have logged in to.</p> <p>Please also note that we cannot retrace all processing operations on the social media portals. Depending on the provider, additional processing operations may therefore be carried out by the operators of the social media portals. Details can be found in the terms of use and privacy policy of the respective social media portals.</p> <p><strong>Legal basis</strong></p> <p>Our social media appearances should ensure the widest possible presence on the Internet. This is a legitimate interest within the meaning of Art. 6 (1) lit. f GDPR. The analysis processes initiated by the social networks may be based on divergent legal bases to be specified by the operators of the social networks (e.g. consent within the meaning of Art. 6 (1) (a) GDPR).</p> <p><strong>Responsibility and assertion of rights</strong></p> <p>If you visit one of our social media sites (e.g., Facebook), we, together with the operator of the social media platform, are responsible for the data processing operations triggered during this visit. You can in principle protect your rights (information, correction, deletion, limitation of processing, data portability and complaint) vis-à-vis us as well as vis-à-vis the operator of the respective social media portal (e.g. Facebook).</p> <p>Please note that despite the shared responsibility with the social media portal operators, we do not have full influence on the data processing operations of the social media portals. Our options are determined by the company policy of the respective provider.</p> <p><strong>Storage time</strong></p> <p>The data collected directly from us via the social media presence will be deleted from our systems as soon as the purpose for their storage lapses, you ask us to delete it, you revoke your consent to the storage or the purpose for the data storage lapses. Stored cookies remain on your device until you delete them. Mandatory statutory provisions - in particular, retention periods - remain unaffected.</p> <p>We have no control over the storage duration of your data that are stored by the social network operators for their own purposes. For details, please contact the social network operators directly (e.g. in their privacy policy, see below).</p> <h4>Individual social networks</h4>
            <p><strong>Facebook</strong></p> <p>We have a profile on Facebook. The provider of this service is Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland. According to Facebook’s statement the collected data will also be transferred to the USA and to other third-party countries.</p>  <p>We have signed an agreement with Facebook on shared responsibility for the processing of data (Controller Addendum). This agreement determines which data processing operations we or Facebook are responsible for when you visit our Facebook Fanpage. This agreement can be viewed at the following link: <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/terms/page_controller_addendum</a>.</p>
             <p><strong>You can customize your advertising settings independently in your user account. Click on the following link and log in:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings?tab=ads</a>.</p> <p>Details can be found in the Facebook privacy policy: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/about/privacy/</a>.</p>
            <p><strong>Instagram</strong></p> <p>We have a profile on Instagram. The provider is Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA. For details on how they handle your personal information, see the Instagram Privacy Policy: <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a>.</p>
            <p><strong>LinkedIn</strong></p> <p>We have a LinkedIn profile. The provider is the LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland. LinkedIn is certified under the EU-US Privacy Shield. LinkedIn uses advertising cookies.</p> <p><strong>If you want to disable LinkedIn advertising cookies, please use the following link: </strong><a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</p> <p>For details on how they handle your personal information, please refer to LinkedIn's privacy policy: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>.</p>
          `,
        }
      }
    }
  },
  computed: {
    frontPageCurrentLanguage: function () {
      return this.frontPage[this.$i18n.locale]
    },
    digitalPageCurrentLanguage: function () {
      return this.digitalPage[this.$i18n.locale]
    },
    projectsCurrentLanguage: function () {
      return this.projects[this.$i18n.locale]
    },
    imprintCurrentLanguageText: function () {
      let text = this.imprint[this.$i18n.locale].text
      text = text.split('<h1>').join('<h1 class="c-white text-l mar-b-3">');
      text = text.split('<h2>').join('<h2 class="c-white text-s mar-t-3 mar-b-1">');
      text = text.split('<h3>').join('<h3 class="c-white text-s mar-t-3 mar-b-1">');
      text = text.split('<p>').join('<p class="c-white text-xs">');
      return text
    },
    imprintCurrentLanguage: function () {
      return this.imprint[this.$i18n.locale]
    },
    privacyPolicyCurrentLanguageText: function () {
      let text = this.privacyPolicy[this.$i18n.locale].text
      text = text.split('<h1>').join('<h1 class="c-white text-l mar-b-3">');
      text = text.split('<h2>').join('<h2 class="c-white text-s mar-t-3 mar-b-1">');
      text = text.split('<h3>').join('<h3 class="c-white text-s mar-t-3 mar-b-1">');
      text = text.split('<h4>').join('<h4 class="c-white text-sx mar-t-1 mar-b-1">');
      text = text.split('<p>').join('<p class="c-white text-xs">');
      text = text.split('<ul>').join('<ul class="mar-tb-1 pad-l-1" style="list-style:disc;">');
      text = text.split('<li>').join('<li class="c-white text-xs">');
      return text
    },
    privacyPolicyCurrentLanguage: function () {
      return this.privacyPolicy[this.$i18n.locale]
    },
    splitScreenCurrentLanguage: function () {
      return this.splitScreen[this.$i18n.locale]
    },
    contactCurrentLanguage: function () {
      return this.contact[this.$i18n.locale]
    },
    navigationCurrentLanguage: function () {
      return this.navigation[this.$i18n.locale]
    }
  }
})