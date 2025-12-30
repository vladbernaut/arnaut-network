        const nodes = [
            // === PRIMARY TARGET ===
            { id: 'vitaliy', label: 'VITALIY\nARNAUT', group: 'target',
              title: 'CEO - Primary Target',
              data: {
                  role: 'CEO / Primary Target',
                  age: '43',
                  dob: 'February 2, 1981 (CONFIRMED - MD Courts)',
                  phone: '(916) 607-9815',
                  email: 'va@integrityautoz.com',
                  address: '6032 Palermo Way, Roseville, CA',
                  formerAddress: '25 Bradbury Road, Owings Mills, MD 21117',
                  instagram: '@vitaliyarnaut',
                  okru: 'https://ok.ru/profile/266108263847',
                  breaches: 'ALIEN TXTBASE, AT&T',
                  passwords: 'Integrity3655',
                  criminal: '⚠️ 2019 Indecent Exposure (MD-GUILTY), 2004 DUI (MD-GUILTY), 2003 Marijuana (MD)'
              }},

            // === ARNAUT PARENTS ===
            { id: 'mikhail', label: 'Mikhail\nArnaut', group: 'arnaut',
              data: {
                  role: 'Father / Patriarch',
                  age: '60',
                  phone: '(916) 388-4212',
                  email: 'mykhayloarnaut@yahoo.com',
                  okru: 'https://ok.ru/profile/185183629945 (298 friends)',
                  bankruptcy: '⚠️ Chapter 13 (2014-2018) Case 14-24580 E.D. California'
              }},
            { id: 'tetyana', label: 'Tetyana\nArnaut', group: 'arnaut',
              data: {
                  role: 'Mother',
                  location: 'Sacramento, CA',
                  bankruptcy: '⚠️ Chapter 13 (2014-2018) Case 14-24580 E.D. California'
              }},

            // === ARNAUT SIBLINGS ===
            { id: 'irina', label: 'Irina\nBenedyuk', group: 'arnaut',
              data: {
                  role: 'Eldest Sibling',
                  age: '41',
                  phone: '(916) 224-9243',
                  location: 'Antelope, CA',
                  maidenName: 'Arnaut',
                  married: 'Vladimir Benedyuk (age 39)',
                  aka: 'Irina G Benedyuk, Irina Kisel, Irina Arnaut'
              }},
            { id: 'vladyslav', label: 'Vladyslav\nArnaut', group: 'arnaut',
              data: {
                  role: 'Secretary / Corp Admin',
                  age: '~41',
                  dob: '~1983 (FL Courts)',
                  email: 'vladarnaut@gmail.com',
                  location: 'Loomis, CA',
                  instagram: '@vladarnaut',
                  passwords: '3655Florinrd, sims1905',
                  criminal: '⚠️ 2024 Eviction (Orange County FL) with Petro, 2018 Speeding (Nevada County CA)',
                  trafficCases: '2005-2006 FL: Careless Driving, No Valid License'
              }},
            { id: 'oleksandr', label: 'Oleksandr\nArnaut', group: 'arnaut',
              data: {
                  role: 'UNVERIFIED - Possibly Cousin',
                  age: '38',
                  dob: 'July 1987',
                  phone: '(916) 307-2941',
                  email: 'alexanderarnaut32@gmail.com',
                  location: 'Sacramento / Tempe, AZ',
                  note: 'BeenVerified association only - no business/social media link to siblings'
              }},
            { id: 'yevgen', label: 'Yevgen\nArnaut', group: 'florida',
              data: {
                  role: 'DriveHub Owner',
                  age: '35',
                  dob: 'September 18, 1989 (CONFIRMED - FL Courts)',
                  location: 'Orlando, Florida',
                  business: 'DriveHub Auto Inc (BANKRUPT - Case 6:25-bk-00594)',
                  criminal: '⚠️ 2022 LICENSE PLATE SWAPPING (Criminal Misd - Nolle Prosequi)',
                  criminal2: '⚠️ 2022 Driving w/ Suspended License (GUILTY)',
                  note: 'Paid Petro\'s $1,100 cocaine bond (2021)'
              }},
            { id: 'petro', label: 'Petro\nArnaut', group: 'florida',
              data: {
                  role: 'DriveHub Employee + Ministry CEO',
                  age: '33',
                  dob: 'June 25, 1991 (CONFIRMED - FL Courts)',
                  phone: '(407) 491-8123, (916) 516-3713',
                  email: 'pparnaut91@gmail.com',
                  location: 'Orlando, FL + 4232 Vittorio Dr, Roseville CA 95661',
                  breaches: 'Prosper, Synthient Stealer, ALIEN TXTBASE',
                  ministryRole: 'CEO - Ministry Ray of Hope Sacramento Inc',
                  criminal: '⚠️ 2021 COCAINE POSSESSION (Felony) + Drug Paraphernalia - Charges Dropped',
                  criminal2: '⚠️ 2024 Eviction (Orange County FL) with Vladyslav',
                  note: 'Bond paid by brother Yevgen ($1,100)'
              }},
            { id: 'iolanta', label: 'Iolanta\nArnaut', group: 'arnaut',
              data: {
                  role: 'Ministry Secretary & Registered Agent',
                  age: '30',
                  dob: 'October 1994',
                  phone: '(916) 770-0494',
                  email: 'iolantakruglyak@gmail.com',
                  location: '6032 Palermo Way, Roseville CA',
                  employer: 'Ministry Ray of Hope Sacramento Inc',
                  ministryRole: 'Secretary + Registered Agent (since Jan 2024)',
                  married: 'Kruglyak family',
                  verified: 'CA SOS Filing #4534299'
              }},

            // === UNCLE PETER BRANCH ===
            { id: 'peter_uncle', label: 'Peter P\nArnaut', group: 'arnaut',
              data: {
                  role: 'Uncle',
                  age: '63',
                  phone: '(916) 799-2996',
                  email: 'parnaut@excite.com',
                  location: 'Roseville, CA',
                  business: 'KUBMO LLC',
                  okru: 'https://ok.ru/profile/154232335813'
              }},
            { id: 'denis', label: 'Denis\nArnaut', group: 'arnaut',
              data: {
                  role: 'Cousin (Peter\'s son)',
                  age: '36',
                  business: 'Revvo Trading LLC',
                  location: 'Roseville, CA'
              }},
            { id: 'david', label: 'David\nArnaut', group: 'arnaut',
              data: {
                  role: 'Cousin (Peter\'s son)',
                  business: 'Royal Supply International LLC',
                  location: 'Roseville, CA'
              }},

            // === SHCHERBAK FAMILY ===
            { id: 'vladimir', label: 'Vladimir\nShcherbak', group: 'shcherbak',
              data: {
                  role: 'GPS ADMIN + Impera Design Co',
                  age: '~35',
                  phone: '(916) 973-8611',
                  email: 'vladimir@integrityautoz.com',
                  email2: 'vladimir@imperadesignco.com',
                  formerAddress: '4777 Bucknell Ct, Sacramento',
                  currentAddress: 'UNKNOWN (moved Jul 2025)'
              }},
            { id: 'vera', label: 'Vera L\nShcherbak', group: 'shcherbak',
              data: {
                  role: 'Vladimir\'s Mother (née Pasyuk)',
                  age: '58',
                  phone: '(916) 759-6944, (916) 317-9484',
                  location: 'Sacramento, CA',
                  note: 'Links Shcherbak to Pasyuk family'
              }},
            { id: 'maia', label: 'Maia\nShcherbak', group: 'shcherbak',
              data: {
                  role: 'Vladimir\'s Sister',
                  age: '34',
                  phone: '(916) 501-9641',
                  location: 'Rocklin, CA',
                  note: 'Lived with Vladimir at 4777 Bucknell Ct (2014-2024)'
              }},
            { id: 'marina', label: 'Marina\nStefoglo', group: 'shcherbak',
              data: {
                  role: 'Vladimir\'s Sister',
                  age: '36',
                  email: 'marinastefoglo@gmail.com',
                  location: 'Sacramento, CA',
                  married: 'Ilya Stefoglo'
              }},

            // === PASYUK FAMILY (FLORIDA) ===
            { id: 'dmitry', label: 'Dmitry\nPasyuk', group: 'florida',
              data: {
                  role: 'Prestige Auto Owner (CLOSED)',
                  age: '41',
                  phone: '941-408-4199',
                  email: 'dmitry_pasyuk@yahoo.com',
                  location: 'North Port, FL',
                  business: 'Prestige Auto of South Florida',
                  businessStatus: 'CLOSED (2024)',
                  flLicense: 'NOT IN DATABASE',
                  ripoffReport: '2015 - BMW $28K fraud (resolved 2018)',
                  sunbiz: 'PASYUK DESIGN LLC (active)',
                  note: '⚠️ CIRCUMSTANTIAL - Family connection to Shcherbak, near DriveHub, but NO confirmed business link to Arnauts'
              }},
            { id: 'valentina_p', label: 'Valentina\nPasyuk', group: 'shcherbak',
              data: {
                  role: 'Pasyuk Family - FL',
                  age: '61',
                  location: 'North Port, FL'
              }},
            { id: 'sergey_p', label: 'Sergey\nPasyuk', group: 'shcherbak',
              data: {
                  role: 'Pasyuk Family - FL',
                  age: '40',
                  location: 'North Port, FL'
              }},

            // === BUSINESSES ===
            { id: 'integrity', label: 'INTEGRITY\nAUTO SALES', group: 'business',
              data: {
                  type: 'Used Car Dealership',
                  address: '3655 Florin Rd, Sacramento, CA 95823',
                  phone: '(916) 392-0800',
                  dmvLicense: '#82235',
                  bbbRating: 'F (32+ complaints)',
                  employees: '~11',
                  revenue: '~$2M annual',
                  gpsVehicles: '3,193'
              }},
            { id: 'lumin', label: 'Lumin\nFisker', group: 'business',
              data: {
                  type: 'Luxury Auto Dealer',
                  address: '12565 Auto Mall Cir, Folsom, CA',
                  phone: '(916) 415-8205',
                  inventory: '~93 vehicles',
                  note: 'Legitimacy front'
              }},
            { id: 'impera', label: 'Impera\nDesign Co', group: 'business',
              data: {
                  type: 'SHELL COMPANY',
                  website: 'imperadesignco.com',
                  owner: 'Vladimir Shcherbak',
                  pppLoan: '$15,307 (March 2021)',
                  purpose: 'Invoice pass-through, tax write-offs'
              }},
            { id: 'quality_auto', label: 'Quality Auto\nSales Inc', group: 'business',
              data: {
                  type: 'Used Car Dealer - DUAL CONTROL',
                  docNumber: 'CA SOS #3498472',
                  filed: 'August 9, 2012 (1 week before Integrity)',
                  address: '5011 Auburn Blvd Ste B, Sacramento CA 95841',
                  locationNote: 'Same street as Slavic Trinity Church - 0.3 miles',
                  dmvLicense: '#82229',
                  phone: '(916) 331-4200',
                  website: 'qualityautoz.com',
                  bbbRating: 'B- (1 unanswered complaint)',
                  sosOwner: 'Vitaliy Arnaut (CEO, CFO, Secretary, Director)',
                  bbbOwner: 'Georgiy Cheban (CEO)',
                  note: '⚠️ DUAL CONTROL - Arnaut on CA SOS, Cheban public-facing'
              }},
            { id: 'drive_lumin', label: 'Drive Lumin\nInc', group: 'business',
              data: {
                  type: 'SHELL ENTITY (No web presence)',
                  docNumber: 'CA SOS #6563323',
                  filed: 'January 30, 2025',
                  address: '12565 Auto Mall Circle, Folsom CA',
                  status: 'Active',
                  webPresence: '❌ NONE - Zero search results',
                  note: 'Shell entity or future Lumin brand migration'
              }},
            { id: 'georgiy', label: 'Georgiy\nCheban', group: 'cheban',
              data: {
                  role: 'Quality Auto - Public-Facing CEO',
                  age: '40',
                  dob: '1983',
                  phone: '(916) 331-4200',
                  homeAddress: '8144 Wood Mill Pl, Antelope CA 95843',
                  businessAddress: '3040 Kinglet Way, Sacramento CA 95843',
                  relatives: 'Valentina Cheban, Tatyana Cheban, Mikhail Cheban',
                  relationship: 'Front-man for Arnaut - FAMILY BUSINESS PARTNER',
                  note: 'Likely brother/relative of Vadim & Maksim Cheban (FL)',
                  source: 'BBB Profile, Radaris'
              }},

            // === CHEBAN FAMILY (FL BUSINESS PARTNERS) ===
            { id: 'vadim', label: 'Vadim\nCheban', group: 'cheban',
              data: {
                  role: 'Merit Auto owner + Former Lumin FL partner',
                  age: '~40',
                  location: 'Jacksonville, FL',
                  email: 'vadim@meritauto.com',
                  formerRole: 'Co-owner Lumin Auto Group NSB (09/2018 - 03/2020)',
                  education: 'Daytona State College',
                  priorCareer: 'Registered Dental Hygienist',
                  note: 'Left Lumin NSB → Started Merit Auto → DriveHub took over address'
              }},
            { id: 'maksim', label: 'Maksim\nCheban', group: 'cheban',
              data: {
                  role: 'Merit Auto owner + Former Lumin FL partner',
                  age: '~38',
                  location: 'Jacksonville, FL',
                  formerRole: 'Co-owner/GM Lumin Auto Group NSB (09/2018 - 03/2020)',
                  note: 'Business partner with brother Vadim'
              }},
            { id: 'merit_auto', label: 'Merit Auto\nGroup', group: 'florida',
              data: {
                  type: 'Used Car Dealer (FL)',
                  address: '8500 Atlantic Blvd, Jacksonville, FL',
                  phone: '(904) 447-1786',
                  owners: 'Vadim Cheban, Maksim Cheban',
                  founded: 'December 2019',
                  bbbStatus: 'Not Accredited',
                  carfaxRating: '3.8/5 (30 reviews)',
                  note: 'Started after leaving Lumin NSB'
              }},
            { id: 'lumin_nsb', label: 'Lumin Auto\n(NSB Location)', group: 'florida',
              data: {
                  type: 'Dealership Location (Part of Lumin Auto Group Inc)',
                  address: '1300 N Dixie Fwy, New Smyrna Beach, FL',
                  parentEntity: 'Lumin Auto Group Inc (FL F18000003492)',
                  operators: 'Vadim + Maksim Cheban (ran location, NOT owners)',
                  actualOwner: 'Vitaliy Arnaut (via CA parent corp)',
                  period: '09/2018 - 03/2020',
                  note: '⚠️ SAME ADDRESS as DriveHub! Chebans operated under Arnaut umbrella'
              }},
            { id: 'drivehub', label: 'DriveHub\nAuto Inc', group: 'florida',
              data: {
                  type: 'Used Car Dealer (FL)',
                  address: '1300 N Dixie Fwy, New Smyrna Beach, FL',
                  officers: 'Yevgen Arnaut, Petro Arnaut',
                  bankruptcy: 'CHAPTER 11 (Case 6:25-bk-00594)',
                  liabilities: '$1-10M',
                  bbbRating: 'F (3 unanswered complaints)'
              }},
            { id: 'lumin_fl', label: 'Lumin Auto Group Inc\n(FL Branch)', group: 'florida',
              data: {
                  type: 'Foreign Profit Corporation (FL) - WITHDRAWN',
                  docNumber: 'FL F18000003492',
                  filed: '07/25/2018',
                  stateOfOrigin: 'CALIFORNIA',
                  crossReference: '⚠️ INTEGRITY AUTO SALES INC',
                  principalAddress: '7721 Blanding Blvd, Jacksonville, FL',
                  mailingAddress: '3655 Florin Rd, Sacramento, CA (INTEGRITY HQ!)',
                  president: 'Vitaliy Arnaut',
                  secretary: 'Vladyslav Arnaut',
                  businessMgr: 'Yevgeniy Nesteruk',
                  status: 'INACTIVE (Withdrawn 01/27/2023)',
                  note: '⚠️ FL branch of CA corp - proves LUMIN = INTEGRITY linkage'
              }},
            { id: 'prestige', label: 'Prestige Auto\n(CLOSED)', group: 'florida',
              data: {
                  type: 'Used Car Dealer (FL) - CLOSED',
                  address: '1878 Winslow Ln, North Port, FL',
                  owner: 'Dmitry Pasyuk',
                  active: '2012-2024',
                  bbbRating: 'A+ (historical)',
                  note: 'Website offline, not in FL license database'
              }},

            // === KEY EXTERNAL CONTACTS ===
            { id: 'kristy', label: 'Kristy\nDewit', group: 'external',
              data: {
                  role: 'GEICO SIU Investigator (Former)',
                  currentJob: 'Sentry Insurance - Special Investigator',
                  geicoTenure: 'Feb 2019 - Jun 2025',
                  phone: '(916) 471-8407, (916) 207-6749',
                  email: 'kdewit@geico.com, kristydewit@yahoo.com',
                  education: 'BS Criminal Justice, CSU Sacramento',
                  conflict: 'Had REPO access in GPS system',
              }},
            { id: 'nesteruk', label: 'Yevgeniy\nNesteruk', group: 'external',
              data: {
                  role: 'Disgruntled Partner',
                  email: 'yevgeniynesteruk@gmail.com',
                  note: 'Failed FL venture with Arnauts'
              }},
            { id: 'anatoliy', label: 'Anatoliy\nArnaut', group: 'arnaut',
              data: {
                  role: 'Extended Family',
                  age: '~48',
                  phone: '(916) 367-2988',
                  email: 'arnautflooring@gmail.com',
                  location: 'Placerville, CA',
                  business: 'ECO HOMES INC',
                  vk: 'id235424570'
              }},

            // === LOCATIONS ===
            { id: 'sacramento', label: 'Sacramento\nCA', group: 'location',
              data: { type: 'Primary Operations Hub' }},
            { id: 'florida', label: 'Florida\nOperations', group: 'location',
              data: { type: 'FL Pipeline (Now Defunct)', note: 'DriveHub + Prestige Auto both closed' }},

            // === CONNECTED FAMILIES ===
            { id: 'taushanzhi', label: 'Taushanzhi\nFamily', group: 'external',
              data: {
                  role: 'Connected via Marriage',
                  key: 'Valentina P Taushanzhi (66) - Arnaut aunt',
                  husband: 'Afanasiy I Taushanzhi (67)',
                  location: 'Sedalia, MO'
              }},
            { id: 'tsiorba', label: 'Tsiorba\nFamily', group: 'external',
              data: {
                  role: 'Connected via Anatoliy',
                  location: 'Fair Oaks / Placerville, CA'
              }},

            // === TECHNOLOGY / VENDORS ===
            { id: 'advantagegps', label: 'AdvantageGPS', group: 'vendor',
              data: {
                  type: 'GPS Tracking Platform',
                  website: 'dealer.advantagegps.com',
                  vulnerability: 'UNAUTHENTICATED API',
                  exposedEndpoints: '/asset/list, /user/list',
                  dataExposed: '3,193 vehicles, 29 users, customer PII',
                  remoteDisable: 'YES (FSTE feature)'
              }},
            { id: 'westlake', label: 'Westlake\nFinancial', group: 'vendor',
              data: {
                  type: 'Subprime Auto Lender',
                  cfpbFine: '$44.1M Settlement (2016)',
                  dojAction: '$700K+ SCRA (2017)',
                  violations: 'Illegal collection, caller ID spoofing',
                  relationship: 'Primary financing partner'
              }},

            // === REPO CONTRACTORS ===
            { id: 'master_recovery', label: 'Master\nRecovery', group: 'repo',
              data: {
                  type: 'Repo Contractor',
                  owner: 'Francisco Gonzalez',
                  email: 'master_recovery1601@yahoo.com',
                  role: 'GPS REPO access',
                  note: 'External repo company'
              }},
            { id: 'luis_flores', label: 'Luis\nFlores', group: 'repo',
              data: {
                  role: 'Repo Contractor',
                  email: 'lflores2468@gmail.com',
                  gpsRole: 'REPO'
              }},

            // === STAFF MEMBERS ===
            { id: 'edwin', label: 'Edwin\nFlores', group: 'staff',
              data: {
                  role: 'Staff - GPS Admin',
                  email: 'edwin@integrityautoz.com',
                  gpsRole: 'ADMIN'
              }},
            { id: 'joe', label: 'Joe\nGonzalez', group: 'staff',
              data: {
                  role: 'Staff - GPS Admin',
                  email: 'joe@integrityautoz.com',
                  gpsRole: 'ADMIN'
              }},
            { id: 'thuraya', label: 'Thuraya\nAl-Janabi', group: 'staff',
              data: {
                  role: 'Account Manager',
                  email: 'thuraya@integrityautoz.com',
                  gpsRole: 'ACCT_MGR'
              }},
            { id: 'monika', label: 'Monika\nFlores', group: 'staff',
              data: {
                  role: 'Account Manager',
                  email: 'monika@integrityautoz.com',
                  gpsRole: 'ACCT_MGR'
              }},

            // === COMMUNITY / CHURCH ===
            { id: 'slavic_trinity', label: 'Slavic Trinity\nChurch', group: 'community',
              data: {
                  type: 'Pentecostal Megachurch',
                  address: '5341 Auburn Blvd, Sacramento CA 95841',
                  pastor: 'Viktor Vronskiy (LinkedIn verified)',
                  phone: '(916) 334-1205',
                  established: '1991 (founded), website says 1944',
                  note: 'Same street as Integrity Auto (5011 Auburn) - 0.3 miles apart',
                  services: 'Russian/Ukrainian (English translators)',
                  arnautConnection: '⚠️ UNVERIFIED - proximity only, no proof of attendance'
              }},
            { id: 'ray_of_hope', label: 'Ministry Ray\nof Hope Sac', group: 'community',
              data: {
                  type: 'Nonprofit Religious Corporation',
                  legalName: 'Ministry Ray Of Hope Sacramento, Inc.',
                  docNumber: 'CA SOS #4534299',
                  filed: 'November 25, 2019',
                  status: '⚠️ SUSPENDED - FTB (April 2, 2024)',
                  originalAddress: '3655 Florin Rd, Sacramento (DEALERSHIP)',
                  currentAddress: '6032 Palermo Way, Roseville (Vitaliy home)',
                  ceo: 'Petro Arnaut',
                  cfo: 'Vitaliy Arnaut',
                  secretary: 'Iolanta Arnaut (also Registered Agent)',
                  note: 'ARNAUT FAMILY MINISTRY - originally registered at dealership address'
              }},

            // === NETWORK CONTACTS ===
            { id: 'pavel_s', label: 'Pavel\nShcherbatyuk', group: 'external',
              data: {
                  role: 'Network Contact (NOT family)',
                  age: '40',
                  employer: 'Visions in Education',
                  email: 'pavelgt7@gmail.com, psh@viedu.org',
                  email2: 'tashkent86@hotmail.com (Uzbekistan!)',
                  location: 'Sacramento, CA',
                  connection: 'Via Taushanzhi family'
              }},
            { id: 'nikolay_p', label: 'Nikolay\nPasyuk', group: 'shcherbak',
              data: {
                  role: 'Vera\'s Husband? Father?',
                  age: '65',
                  location: 'Boiling Springs, SC'
              }},
            { id: 'mariya_p', label: 'Mariya I\nPasyuk', group: 'shcherbak',
              data: {
                  role: 'Pasyuk Family - FL',
                  age: '64',
                  location: 'North Port, FL'
              }},

            // === ADDITIONAL BUSINESSES ===
            { id: 'ryan_ryan', label: 'Ryan & Ryan\nInc', group: 'business',
              data: {
                  type: 'Auto Dealer',
                  owner: 'Yevgen Arnaut',
                  license: '#83285?'
              }},
            { id: 'kubmo', label: 'KUBMO\nLLC', group: 'business',
              data: {
                  type: 'Business Entity',
                  owner: 'Peter P Arnaut (Uncle)',
                  location: 'Roseville, CA'
              }},
            { id: 'revvo', label: 'Revvo\nTrading LLC', group: 'business',
              data: {
                  type: 'Trading Company',
                  owner: 'Denis Arnaut',
                  location: 'Roseville, CA'
              }},
            { id: 'royal_supply', label: 'Royal Supply\nIntl LLC', group: 'business',
              data: {
                  type: 'Supply Company',
                  owner: 'David Arnaut',
                  location: 'Roseville, CA'
              }},
            { id: 'eco_homes', label: 'ECO HOMES\nINC', group: 'business',
              data: {
                  type: 'Home Services',
                  owner: 'Anatoliy Arnaut',
                  location: 'Placerville, CA'
              }},
            { id: 'pasyuk_design', label: 'PASYUK\nDESIGN LLC', group: 'business',
              data: {
                  type: 'Design Company',
                  owner: 'Dmitry Pasyuk',
                  address: '4313 La Rosa Ave, North Port, FL',
                  ein: '93-2112415',
                  filed: '06/28/2023'
              }},

            // === ONLINE ACCOUNTS ===
            { id: 'ebay_vav', label: 'eBay\nvavautosales', group: 'online',
              data: {
                  type: 'eBay Account',
                  username: 'vavautosales',
                  memberSince: 'January 2010',
                  transactions: '3,662',
                  role: 'BUYER (parts/vehicles sourcing)',
                  phone: '(916) 662-4283',
                  email: 'integrity.shop@yahoo.com',
                  breaches: '5 confirmed',
                  lastActivity: 'Dormant (0 in 12 months)'
              }},
            { id: 'amazon_seller', label: 'Amazon\nSeller', group: 'online',
              data: {
                  type: 'Amazon Marketplace',
                  owner: 'Vladyslav Arnaut',
                  sellerId: '3xr83hknw7ssbkr',
                  address: '3655 Florin Rd'
              }},

            // === ADDITIONAL LOCATIONS ===
            { id: 'auburn_blvd', label: 'Auburn Blvd\nCorridor', group: 'location',
              data: {
                  type: 'Slavic Business Corridor',
                  range: '4777-5341 Auburn Blvd',
                  includes: 'Integrity Auto 2nd location, Slavic Trinity Church',
                  note: 'Strategic placement near immigrant community'
              }},
            { id: 'florin_rd', label: '3655 Florin Rd\nHQ', group: 'location',
              data: {
                  type: 'Primary Dealership',
                  tenant: 'Integrity Auto Sales',
                  previousTenants: 'Sacramento Hyundai, Senator Hyundai'
              }},

            // === BREACH / COMPROMISE SOURCES ===
            { id: 'alien_txtbase', label: 'ALIEN\nTXTBASE', group: 'breach',
              data: {
                  type: 'Stealer Log Breach',
                  date: 'February 2025',
                  records: '284M',
                  dataExposed: 'Emails, PASSWORDS',
                  affectedAccounts: 'va@, vladarnaut@, pparnaut91@'
              }},
            { id: 'att_breach', label: 'AT&T\nBreach', group: 'breach',
              data: {
                  type: 'Telecom Data Breach',
                  dataExposed: 'Phone, Address, Account info',
                  affectedAccounts: 'lg.integrityauto@gmail.com, Vladimir Shcherbak'
              }},
            { id: 'prosper_breach', label: 'Prosper\nBreach', group: 'breach',
              data: {
                  type: 'Financial Services Breach',
                  date: 'September 2025',
                  records: '17.6M',
                  dataExposed: 'DOB, Address, Gov IDs, Credit, Income, Employment',
                  affectedAccounts: 'pparnaut91@gmail.com (Petro)'
              }},

            // === ADDITIONAL REPO CONTRACTORS ===
            { id: 'sergey_k', label: 'Sergey\nKrasnikov', group: 'repo',
              data: {
                  role: 'Repo Contractor (Slavic)',
                  email: 'sergteam66@gmail.com',
                  phone: '(916) 642-3735',
                  location: 'Rocklin, CA',
                  note: 'Eastern European heritage, trusted network'
              }},
            { id: 'rogelio_a', label: 'Rogelio\nAlvarado', group: 'repo',
              data: {
                  role: 'Repo Contractor',
                  email: 'alvaradohndz24@gmail.com',
                  phone: '(209) 641-2427',
                  location: 'Stockton, CA',
                  coverage: 'San Joaquin Valley'
              }},
            { id: 'joseph_c', label: 'Joseph\nCatello', group: 'repo',
              data: {
                  role: 'Repo Contractor + Tile Business',
                  email: 'joecatello@gmail.com',
                  phone: '(916) 825-8557',
                  location: 'Rancho Cordova, CA',
                  business: 'Joe Catello Tile Inc',
                  note: 'Dual income - tile + repo'
              }},
            { id: 'luis_deleon', label: 'Luis\nDe Leon', group: 'repo',
              data: {
                  role: 'Repo Contractor',
                  email: 'luisjrdeleon@yahoo.com',
                  phone: '(925) 997-9517',
                  location: 'East Bay (Contra Costa)',
                  note: 'Yahoo email = likely breached (2013)'
              }},
            { id: 'ryan_oneil', label: 'Ryan\nONeil', group: 'repo',
              data: {
                  role: 'Repo Contractor',
                  email: 'roccourt@gmail.com',
                  phone: '(831) 345-0979',
                  location: 'Monterey Bay',
                  coverage: 'Monterey, Santa Cruz, Salinas'
              }},
            { id: 'narinder_s', label: 'Narinder\nSingh', group: 'repo',
              data: {
                  role: 'Repo Contractor + Business Broker',
                  email: 'narinder17maan@gmail.com',
                  phone: '(916) 588-8073',
                  location: 'Sacramento, CA',
                  business: 'Nationwide Homes & Lending',
                  dreLicense: '#01719546'
              }},

            // === EVIDENCE / FRAUD ===
            { id: 'ferrari_812', label: 'Ferrari 812\nFlood Car', group: 'evidence',
              data: {
                  type: 'CONFIRMED FLOOD VEHICLE',
                  vin: 'ZFF83CLA3K0247114',
                  year: '2019',
                  msrp: '~$340,000',
                  lossDate: 'September 18, 2022',
                  cause: 'Hurricane Ian FLOOD',
                  source: 'Copart Miami South (Dec 2022)',
                  nicbStatus: 'SALVAGE RECORD CONFIRMED'
              }},
            { id: 'copart', label: 'Copart\nMiami South', group: 'vendor',
              data: {
                  type: 'Salvage Auction',
                  role: 'Flood vehicle sourcing',
                  location: 'Miami, FL',
                  note: 'Where Ferrari 812 was purchased'
              }},

            // === REGULATORY AGENCIES ===
            { id: 'nicb', label: 'NICB', group: 'agency',
              data: {
                  type: 'National Insurance Crime Bureau',
                  role: 'VINCheck database',
                  finding: 'Confirmed Ferrari 812 flood status',
                  website: 'nicb.org'
              }},
            { id: 'ca_dmv', label: 'CA DMV', group: 'agency',
              data: {
                  type: 'Regulatory Agency',
                  role: 'Dealer licensing',
                  integrityLicense: '#82235',
                  pendingAction: 'Misdemeanor investigation'
              }},
            { id: 'bsis', label: 'CA BSIS', group: 'agency',
              data: {
                  type: 'Bureau of Security & Investigative Services',
                  role: 'Repo agent licensing',
                  note: 'No contractors verified licensed'
              }},

            // === ADDITIONAL BREACHES ===
            { id: 'synthient', label: 'Synthient\nStealer', group: 'breach',
              data: {
                  type: 'Stealer Log Breach',
                  date: '2025',
                  records: '183M',
                  dataExposed: 'Email, PASSWORDS',
                  affectedAccounts: 'pparnaut91@gmail.com'
              }},
            { id: 'houzz', label: 'Houzz.com\nBreach', group: 'breach',
              data: {
                  type: 'Home Design Platform Breach',
                  date: '2019',
                  dataExposed: 'Email, passwords, IP, location',
                  affectedAccounts: 'Vitaliy Arnaut'
              }},
            { id: 'pdl_breach', label: 'PDL Data\nEnrichment', group: 'breach',
              data: {
                  type: 'Data Enrichment Breach',
                  date: 'October 2019',
                  records: '600M+',
                  dataExposed: 'Full PII, employment, social profiles',
                  note: 'master_recovery1601@yahoo.com exposed'
              }},

            // === TRACKED VEHICLES (Sample from 3,193) ===
            { id: 'car_ferrari', label: '🚗 Ferrari 812\nHouston TX', group: 'vehicle',
              data: {
                  vin: 'ZFF83CLA3K0247114',
                  year: '2019',
                  make: 'Ferrari 812 Superfast',
                  coordinates: '30.085699, -95.641102',
                  location: 'Houston, TX',
                  map: 'https://www.openstreetmap.org/?mlat=30.085699&mlon=-95.641102&zoom=15',
                  floodStatus: 'CONFIRMED - Hurricane Ian',
                  source: 'Copart Miami South'
              }},
            { id: 'car_maserati', label: '🚗 Maserati Levante\nBurlingame CA', group: 'vehicle',
              data: {
                  vin: 'ZN661YUM6RX453920',
                  year: '2024',
                  make: 'Maserati Levante',
                  coordinates: '37.579, -122.348',
                  location: 'Burlingame, CA (Bayshore Fwy)',
                  map: 'https://www.openstreetmap.org/?mlat=37.579&mlon=-122.348&zoom=15'
              }},
            { id: 'car_porsche', label: '🚗 Porsche Cayenne\nTahoe CA', group: 'vehicle',
              data: {
                  vin: 'WP1AA2A50JLB16322',
                  year: '2018',
                  make: 'Porsche Cayenne',
                  customer: 'Aboul-Ezz',
                  coordinates: '39.27932, -120.119719',
                  location: 'Lake Tahoe area, CA',
                  map: 'https://www.openstreetmap.org/?mlat=39.27932&mlon=-120.119719&zoom=15'
              }},
            { id: 'car_bmw', label: '🚗 BMW 328i\nPalmdale CA', group: 'vehicle',
              data: {
                  vin: 'WBAWR33588P152911',
                  year: '2008',
                  make: 'BMW 328i',
                  address: '2767 Redington St, Palmdale, CA 93551',
                  coordinates: '34.579, -118.116',
                  location: 'Palmdale, CA',
                  map: 'https://www.openstreetmap.org/?mlat=34.579&mlon=-118.116&zoom=15'
              }},
            { id: 'car_jeep', label: '🚗 Jeep Cherokee\nTracy CA', group: 'vehicle',
              data: {
                  vin: '1C4RJEBG6HC893099',
                  year: '2017',
                  make: 'Jeep Grand Cherokee',
                  address: '18599 Stanford Rd, Tracy, CA 95377',
                  coordinates: '37.739, -121.426',
                  location: 'Tracy, CA',
                  map: 'https://www.openstreetmap.org/?mlat=37.739&mlon=-121.426&zoom=15'
              }},
            { id: 'car_honda', label: '🚗 Honda Civic\nRedding CA', group: 'vehicle',
              data: {
                  vin: '19XFC1F39HE212469',
                  year: '2017',
                  make: 'Honda Civic',
                  address: '3511 Alta Mesa Dr, Redding, CA 96002',
                  coordinates: '40.556, -122.335',
                  location: 'Redding, CA',
                  map: 'https://www.openstreetmap.org/?mlat=40.556&mlon=-122.335&zoom=15'
              }},
            { id: 'car_vw', label: '🚗 VW Jetta\nSalt Lake UT', group: 'vehicle',
              data: {
                  vin: '3VW017AU1HM503663',
                  year: '2017',
                  make: 'Volkswagen Jetta',
                  customer: 'abacub sotero',
                  coordinates: '40.621261, -111.865727',
                  location: 'Salt Lake City, UT',
                  map: 'https://www.openstreetmap.org/?mlat=40.621261&mlon=-111.865727&zoom=15'
              }},
            { id: 'car_gmc1', label: '🚗 GMC\nRoseville CA', group: 'vehicle',
              data: {
                  vin: '3GTUUEEL4PG121643',
                  year: '2021',
                  make: 'GMC',
                  customer: 'Acosta Garcia',
                  coordinates: '38.826087, -121.314578',
                  location: 'Roseville, CA',
                  map: 'https://www.openstreetmap.org/?mlat=38.826087&mlon=-121.314578&zoom=15'
              }},
            { id: 'car_chrysler', label: '🚗 Chrysler 200\nCalexico CA', group: 'vehicle',
              data: {
                  vin: '1C3CCCAB8GN127554',
                  year: '2016',
                  make: 'Chrysler 200',
                  customer: 'Adams',
                  coordinates: '32.584348, -115.436992',
                  location: 'Calexico, CA (Mexico border)',
                  map: 'https://www.openstreetmap.org/?mlat=32.584348&mlon=-115.436992&zoom=15'
              }},
            { id: 'car_gmc2', label: '🚗 GMC Yukon\nDavis CA', group: 'vehicle',
              data: {
                  vin: '1GKS1HKJ0JR104614',
                  year: '2018',
                  make: 'GMC Yukon',
                  customer: 'Adolfo Casas Cabrera',
                  coordinates: '38.351041, -121.906618',
                  location: 'Davis, CA',
                  map: 'https://www.openstreetmap.org/?mlat=38.351041&mlon=-121.906618&zoom=15'
              }}
        ];

        // Edges (Relationships)
        const edges = [
            // Family Structure
            { from: 'mikhail', to: 'tetyana', label: 'married', color: '#ff8844' },
            { from: 'mikhail', to: 'vitaliy', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'vladyslav', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'oleksandr', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'yevgen', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'petro', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'iolanta', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'irina', label: 'father', color: '#ff8844' },
            { from: 'mikhail', to: 'peter_uncle', label: 'brother', color: '#ff8844', dashes: true },

            // Uncle Peter's branch
            { from: 'peter_uncle', to: 'denis', label: 'father', color: '#ff8844' },
            { from: 'peter_uncle', to: 'david', label: 'father', color: '#ff8844' },

            // Sibling relationships
            { from: 'vitaliy', to: 'vladyslav', label: 'brother', color: '#ff8844', dashes: true },
            { from: 'vitaliy', to: 'yevgen', label: 'brother', color: '#ff8844', dashes: true },
            { from: 'yevgen', to: 'petro', label: 'brother', color: '#ff8844', dashes: true },

            // Business ownership
            { from: 'vitaliy', to: 'integrity', label: 'CEO', color: '#44ff44', width: 3 },
            { from: 'vitaliy', to: 'lumin', label: 'Partner', color: '#44ff44' },
            { from: 'vladyslav', to: 'integrity', label: 'Secretary', color: '#44ff44' },
            { from: 'yevgen', to: 'drivehub', label: 'Owner', color: '#aa44ff' },
            { from: 'petro', to: 'drivehub', label: 'Employee', color: '#aa44ff' },
            { from: 'vladimir', to: 'impera', label: 'Owner', color: '#44ff44' },
            { from: 'impera', to: 'integrity', label: 'Shell for', color: '#44ff44', dashes: true },
            { from: 'impera', to: 'lumin', label: 'Created', color: '#44ff44', dashes: true },
            { from: 'dmitry', to: 'prestige', label: 'Owner', color: '#aa44ff' },

            // Quality Auto Sales - DUAL CONTROL
            { from: 'vitaliy', to: 'quality_auto', label: 'CA SOS CEO', color: '#44ff44', width: 2 },
            { from: 'georgiy', to: 'quality_auto', label: 'BBB CEO', color: '#ffaa00', width: 2 },
            { from: 'quality_auto', to: 'auburn_blvd', label: 'location', color: '#888' },
            { from: 'quality_auto', to: 'slavic_trinity', label: 'same street', color: '#ffaaff', dashes: true },

            // Drive Lumin Inc - SHELL ENTITY
            { from: 'vitaliy', to: 'drive_lumin', label: 'Owner', color: '#44ff44' },
            { from: 'drive_lumin', to: 'lumin', label: 'brand link', color: '#888', dashes: true },

            // GPS System Access
            { from: 'vladimir', to: 'integrity', label: 'GPS ADMIN', color: '#00ffff', width: 2 },
            { from: 'kristy', to: 'integrity', label: 'GPS REPO', color: '#ffff00', width: 2 },
            { from: 'petro', to: 'integrity', label: 'GPS REPO', color: '#ffff00' },
            { from: 'vladyslav', to: 'integrity', label: 'GPS REPO', color: '#ffff00' },

            // Shcherbak Family
            { from: 'vera', to: 'vladimir', label: 'mother', color: '#44aaff' },
            { from: 'vera', to: 'maia', label: 'mother', color: '#44aaff' },
            { from: 'vera', to: 'marina', label: 'mother', color: '#44aaff' },
            { from: 'vladimir', to: 'maia', label: 'sibling', color: '#44aaff', dashes: true },
            { from: 'vladimir', to: 'marina', label: 'sibling', color: '#44aaff', dashes: true },

            // Pasyuk-Shcherbak Connection
            { from: 'vera', to: 'dmitry', label: 'relative (Pasyuk)', color: '#44aaff', dashes: true },
            { from: 'dmitry', to: 'valentina_p', label: 'relative', color: '#44aaff', dashes: true },
            { from: 'dmitry', to: 'sergey_p', label: 'relative', color: '#44aaff', dashes: true },

            // FL Pipeline
            { from: 'drivehub', to: 'florida', label: 'location', color: '#888' },
            { from: 'prestige', to: 'florida', label: 'location', color: '#888' },
            { from: 'drivehub', to: 'integrity', label: 'FL PIPELINE', color: '#ff4444', width: 2, dashes: [5,5] },
            { from: 'prestige', to: 'integrity', label: 'HISTORICAL', color: '#888', dashes: [5,5] },

            // Sacramento Hub
            { from: 'integrity', to: 'sacramento', label: 'HQ', color: '#888' },
            { from: 'lumin', to: 'sacramento', label: 'location', color: '#888' },

            // External connections
            { from: 'kristy', to: 'integrity', label: 'CONFLICT', color: '#ff4444', width: 2 },
            { from: 'nesteruk', to: 'drivehub', label: 'former partner', color: '#888', dashes: true },
            { from: 'vitaliy', to: 'lumin_fl', label: 'Partner', color: '#aa44ff' },
            { from: 'nesteruk', to: 'lumin_fl', label: 'Partner', color: '#aa44ff' },
            { from: 'lumin_fl', to: 'florida', label: 'location', color: '#888' },
            { from: 'lumin_fl', to: 'integrity', label: 'FL PIPELINE', color: '#ff4444', dashes: [5,5] },
            { from: 'taushanzhi', to: 'mikhail', label: 'in-law', color: '#888', dashes: true },
            { from: 'anatoliy', to: 'tsiorba', label: 'connected', color: '#888', dashes: true },
            { from: 'anatoliy', to: 'mikhail', label: 'relative', color: '#ff8844', dashes: true },

            // === NEW EDGES ===

            // AdvantageGPS connections
            { from: 'integrity', to: 'advantagegps', label: 'USES', color: '#00ffff', width: 2 },
            { from: 'advantagegps', to: 'vladimir', label: 'ADMIN access', color: '#00ffff' },
            { from: 'advantagegps', to: 'edwin', label: 'ADMIN access', color: '#00ffff' },
            { from: 'advantagegps', to: 'joe', label: 'ADMIN access', color: '#00ffff' },
            { from: 'advantagegps', to: 'kristy', label: 'REPO access', color: '#ffff00' },
            { from: 'advantagegps', to: 'master_recovery', label: 'REPO access', color: '#ffff00' },

            // Westlake Financial
            { from: 'integrity', to: 'westlake', label: 'FINANCING', color: '#ff4444', width: 2 },

            // Repo contractors
            { from: 'master_recovery', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'luis_flores', to: 'integrity', label: 'contracts', color: '#ff6600' },

            // Staff connections
            { from: 'edwin', to: 'integrity', label: 'employee', color: '#888' },
            { from: 'joe', to: 'integrity', label: 'employee', color: '#888' },
            { from: 'thuraya', to: 'integrity', label: 'employee', color: '#888' },
            { from: 'monika', to: 'integrity', label: 'employee', color: '#888' },

            // Church/Community - Ministry Ray of Hope (ARNAUT FAMILY)
            { from: 'slavic_trinity', to: 'auburn_blvd', label: 'location', color: '#888' },
            { from: 'integrity', to: 'auburn_blvd', label: '2nd location', color: '#888', dashes: true },
            { from: 'iolanta', to: 'ray_of_hope', label: 'Secretary + Agent', color: '#ffaaff', width: 2 },
            { from: 'vitaliy', to: 'ray_of_hope', label: 'CFO', color: '#ffaaff', width: 2 },
            { from: 'petro', to: 'ray_of_hope', label: 'CEO', color: '#ffaaff', width: 2 },
            { from: 'ray_of_hope', to: 'integrity', label: 'orig. address', color: '#ffaaff', dashes: true },

            // Network contacts
            { from: 'pavel_s', to: 'taushanzhi', label: 'associate', color: '#888', dashes: true },
            { from: 'nikolay_p', to: 'vera', label: 'husband?', color: '#44aaff', dashes: true },
            { from: 'dmitry', to: 'mariya_p', label: 'relative', color: '#44aaff', dashes: true },

            // Business ownership
            { from: 'peter_uncle', to: 'kubmo', label: 'Owner', color: '#44ff44' },
            { from: 'denis', to: 'revvo', label: 'Owner', color: '#44ff44' },
            { from: 'david', to: 'royal_supply', label: 'Owner', color: '#44ff44' },
            { from: 'anatoliy', to: 'eco_homes', label: 'Owner', color: '#44ff44' },
            { from: 'yevgen', to: 'ryan_ryan', label: 'Owner', color: '#44ff44' },
            { from: 'dmitry', to: 'pasyuk_design', label: 'Owner', color: '#44ff44' },

            // Online accounts
            { from: 'vitaliy', to: 'ebay_vav', label: 'operates', color: '#ff44ff' },
            { from: 'vladyslav', to: 'amazon_seller', label: 'operates', color: '#ff44ff' },

            // Location connections
            { from: 'integrity', to: 'florin_rd', label: 'HQ', color: '#888' },

            // Breach connections
            { from: 'vitaliy', to: 'alien_txtbase', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'vladyslav', to: 'alien_txtbase', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'petro', to: 'alien_txtbase', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'petro', to: 'prosper_breach', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'vladimir', to: 'att_breach', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'vitaliy', to: 'att_breach', label: 'EXPOSED', color: '#ff0000', dashes: true },

            // === NEW REPO CONTRACTOR EDGES ===
            { from: 'sergey_k', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'sergey_k', to: 'advantagegps', label: 'REPO access', color: '#ffff00' },
            { from: 'rogelio_a', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'joseph_c', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'luis_deleon', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'ryan_oneil', to: 'integrity', label: 'contracts', color: '#ff6600' },
            { from: 'narinder_s', to: 'integrity', label: 'contracts', color: '#ff6600' },

            // === FERRARI FLOOD CAR EVIDENCE ===
            { from: 'ferrari_812', to: 'lumin', label: 'tracked in GPS', color: '#ff0000', width: 2 },
            { from: 'ferrari_812', to: 'copart', label: 'purchased from', color: '#ff0000' },
            { from: 'ferrari_812', to: 'nicb', label: 'VERIFIED FLOOD', color: '#ff0000', width: 2 },
            { from: 'copart', to: 'florida', label: 'location', color: '#888' },

            // === REGULATORY EDGES ===
            { from: 'integrity', to: 'ca_dmv', label: 'License #82235', color: '#888' },
            { from: 'ca_dmv', to: 'integrity', label: 'INVESTIGATION', color: '#ff0000', dashes: true },
            { from: 'bsis', to: 'master_recovery', label: 'should license', color: '#888', dashes: true },

            // === ADDITIONAL BREACH EDGES ===
            { from: 'petro', to: 'synthient', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'vitaliy', to: 'houzz', label: 'EXPOSED', color: '#ff0000', dashes: true },
            { from: 'master_recovery', to: 'pdl_breach', label: 'EXPOSED', color: '#ff0000', dashes: true },

            // === VEHICLE TRACKING EDGES ===
            { from: 'car_ferrari', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_ferrari', to: 'ferrari_812', label: 'same vehicle', color: '#ffcc00', width: 2 },
            { from: 'car_maserati', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_porsche', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_bmw', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_jeep', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_honda', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_vw', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_gmc1', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_chrysler', to: 'advantagegps', label: 'tracked', color: '#33cc33' },
            { from: 'car_gmc2', to: 'advantagegps', label: 'tracked', color: '#33cc33' },

            // === CHEBAN FAMILY EDGES (FL-CA PIPELINE) ===
            { from: 'georgiy', to: 'vadim', label: 'likely relative', color: '#ff9900', dashes: true },
            { from: 'vadim', to: 'maksim', label: 'brother', color: '#ff9900' },
            { from: 'vadim', to: 'merit_auto', label: 'Owner', color: '#ff9900', width: 2 },
            { from: 'maksim', to: 'merit_auto', label: 'Owner', color: '#ff9900', width: 2 },
            { from: 'vadim', to: 'lumin_nsb', label: 'Operator (not owner)', color: '#ff9900' },
            { from: 'maksim', to: 'lumin_nsb', label: 'Operator/GM', color: '#ff9900' },
            { from: 'lumin_nsb', to: 'drivehub', label: '⚠️ SAME ADDRESS', color: '#ff0000', width: 3 },
            { from: 'merit_auto', to: 'florida', label: 'location', color: '#888' },
            { from: 'lumin_nsb', to: 'florida', label: 'location', color: '#888' },

            // === LUMIN CORPORATE STRUCTURE (ARNAUT CONTROLLED) ===
            { from: 'lumin_nsb', to: 'lumin_fl', label: 'location of', color: '#aa44ff', dashes: true },
            { from: 'lumin_fl', to: 'integrity', label: '⚠️ CROSS-REF', color: '#ff0000', width: 3 },
            { from: 'vitaliy', to: 'lumin_fl', label: 'President', color: '#44ff44', width: 2 },
            { from: 'vladyslav', to: 'lumin_fl', label: 'Secretary', color: '#44ff44' },
            { from: 'nesteruk', to: 'lumin_fl', label: 'Business Mgr', color: '#ffff00' }
];
