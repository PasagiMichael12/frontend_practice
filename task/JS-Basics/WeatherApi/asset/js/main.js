const countryList = {
   AF: 'Afghanistan',
   AL: 'Albania',
   DZ: 'Algeria',
   AS: 'American Samoa',
   AD: 'Andorra',
   AO: 'Angola',
   AI: 'Anguilla',
   AQ: 'Antarctica',
   AG: 'Antigua and Barbuda',
   AR: 'Argentina',
   AM: 'Armenia',
   AW: 'Aruba',
   AU: 'Australia',
   AT: 'Austria',
   AZ: 'Azerbaijan',
   BS: 'Bahamas',
   BH: 'Bahrain',
   BD: 'Bangladesh',
   BB: 'Barbados',
   BY: 'Belarus',
   BE: 'Belgium',
   BZ: 'Belize',
   BJ: 'Benin',
   BM: 'Bermuda',
   BT: 'Bhutan',
   BO: 'Bolivia (Plurinational State of)',
   BQ: 'Bonaire, Sint Eustatius and Saba',
   BA: 'Bosnia and Herzegovina',
   BW: 'Botswana',
   BV: 'Bouvet Island',
   BR: 'Brazil',
   IO: 'British Indian Ocean Territory',
   BN: 'Brunei Darussalam',
   BG: 'Bulgaria',
   BF: 'Burkina Faso',
   BI: 'Burundi',
   CV: 'Cabo Verde',
   KH: 'Cambodia',
   CM: 'Cameroon',
   CA: 'Canada',
   KY: 'Cayman Islands',
   CF: 'Central African Republic',
   TD: 'Chad',
   CL: 'Chile',
   CN: 'China',
   CX: 'Christmas Island',
   CC: 'Cocos (Keeling) Islands',
   CO: 'Colombia',
   KM: 'Comoros',
   CD: 'Congo (the Democratic Republic of the)',
   CG: 'Congo',
   CK: 'Cook Islands',
   CR: 'Costa Rica',
   HR: 'Croatia',
   CU: 'Cuba',
   CW: 'Curaçao',
   CY: 'Cyprus',
   CZ: 'Czechia',
   CI: "Côte d'Ivoire",
   DK: 'Denmark',
   DJ: 'Djibouti',
   DM: 'Dominica',
   DO: 'Dominican Republic',
   EC: 'Ecuador',
   EG: 'Egypt',
   SV: 'El Salvador',
   GQ: 'Equatorial Guinea',
   ER: 'Eritrea',
   EE: 'Estonia',
   SZ: 'Eswatini',
   ET: 'Ethiopia',
   FK: 'Falkland Islands [Malvinas]',
   FO: 'Faroe Islands',
   FJ: 'Fiji',
   FI: 'Finland',
   FR: 'France',
   GF: 'French Guiana',
   PF: 'French Polynesia',
   TF: 'French Southern Territories',
   GA: 'Gabon',
   GM: 'Gambia',
   GE: 'Georgia',
   DE: 'Germany',
   GH: 'Ghana',
   GI: 'Gibraltar',
   GR: 'Greece',
   GL: 'Greenland',
   GD: 'Grenada',
   GP: 'Guadeloupe',
   GU: 'Guam',
   GT: 'Guatemala',
   GG: 'Guernsey',
   GN: 'Guinea',
   GW: 'Guinea-Bissau',
   GY: 'Guyana',
   HT: 'Haiti',
   HM: 'Heard Island and McDonald Islands',
   VA: 'Holy See',
   HN: 'Honduras',
   HK: 'Hong Kong',
   HU: 'Hungary',
   IS: 'Iceland',
   IN: 'India',
   ID: 'Indonesia',
   IR: 'Iran (Islamic Republic of)',
   IQ: 'Iraq',
   IE: 'Ireland',
   IM: 'Isle of Man',
   IL: 'Israel',
   IT: 'Italy',
   JM: 'Jamaica',
   JP: 'Japan',
   JE: 'Jersey',
   JO: 'Jordan',
   KZ: 'Kazakhstan',
   KE: 'Kenya',
   KI: 'Kiribati',
   KP: "Korea (the Democratic People's Republic of)",
   KR: 'Korea (the Republic of)',
   KW: 'Kuwait',
   KG: 'Kyrgyzstan',
   LA: "Lao People's Democratic Republic",
   LV: 'Latvia',
   LB: 'Lebanon',
   LS: 'Lesotho',
   LR: 'Liberia',
   LY: 'Libya',
   LI: 'Liechtenstein',
   LT: 'Lithuania',
   LU: 'Luxembourg',
   MO: 'Macao',
   MG: 'Madagascar',
   MW: 'Malawi',
   MY: 'Malaysia',
   MV: 'Maldives',
   ML: 'Mali',
   MT: 'Malta',
   MH: 'Marshall Islands',
   MQ: 'Martinique',
   MR: 'Mauritania',
   MU: 'Mauritius',
   YT: 'Mayotte',
   MX: 'Mexico',
   FM: 'Micronesia (Federated States of)',
   MD: 'Moldova (the Republic of)',
   MC: 'Monaco',
   MN: 'Mongolia',
   ME: 'Montenegro',
   MS: 'Montserrat',
   MA: 'Morocco',
   MZ: 'Mozambique',
   MM: 'Myanmar',
   NA: 'Namibia',
   NR: 'Nauru',
   NP: 'Nepal',
   NL: 'Netherlands',
   NC: 'New Caledonia',
   NZ: 'New Zealand',
   NI: 'Nicaragua',
   NE: 'Niger',
   NG: 'Nigeria',
   NU: 'Niue',
   NF: 'Norfolk Island',
   MP: 'Northern Mariana Islands',
   NO: 'Norway',
   OM: 'Oman',
   PK: 'Pakistan',
   PW: 'Palau',
   PS: 'Palestine, State of',
   PA: 'Panama',
   PG: 'Papua New Guinea',
   PY: 'Paraguay',
   PE: 'Peru',
   PH: 'Philippines',
   PN: 'Pitcairn',
   PL: 'Poland',
   PT: 'Portugal',
   PR: 'Puerto Rico',
   QA: 'Qatar',
   MK: 'Republic of North Macedonia',
   RO: 'Romania',
   RU: 'Russian Federation',
   RW: 'Rwanda',
   RE: 'Réunion',
   BL: 'Saint Barthélemy',
   SH: 'Saint Helena, Ascension and Tristan da Cunha',
   KN: 'Saint Kitts and Nevis',
   LC: 'Saint Lucia',
   MF: 'Saint Martin (French part)',
   PM: 'Saint Pierre and Miquelon',
   VC: 'Saint Vincent and the Grenadines',
   WS: 'Samoa',
   SM: 'San Marino',
   ST: 'Sao Tome and Principe',
   SA: 'Saudi Arabia',
   SN: 'Senegal',
   RS: 'Serbia',
   SC: 'Seychelles',
   SL: 'Sierra Leone',
   SG: 'Singapore',
   SX: 'Sint Maarten (Dutch part)',
   SK: 'Slovakia',
   SI: 'Slovenia',
   SB: 'Solomon Islands',
   SO: 'Somalia',
   ZA: 'South Africa',
   GS: 'South Georgia and the South Sandwich Islands',
   SS: 'South Sudan',
   ES: 'Spain',
   LK: 'Sri Lanka',
   SD: 'Sudan',
   SR: 'Suriname',
   SJ: 'Svalbard and Jan Mayen',
   SE: 'Sweden',
   CH: 'Switzerland',
   SY: 'Syrian Arab Republic',
   TW: 'Taiwan',
   TJ: 'Tajikistan',
   TZ: 'Tanzania, United Republic of',
   TH: 'Thailand',
   TL: 'Timor-Leste',
   TG: 'Togo',
   TK: 'Tokelau',
   TO: 'Tonga',
   TT: 'Trinidad and Tobago',
   TN: 'Tunisia',
   TR: 'Turkey',
   TM: 'Turkmenistan',
   TC: 'Turks and Caicos Islands',
   TV: 'Tuvalu',
   UG: 'Uganda',
   UA: 'Ukraine',
   AE: 'United Arab Emirates',
   GB: 'United Kingdom of Great Britain and Northern Ireland',
   UM: 'United States Minor Outlying Islands',
   US: 'United States of America',
   UY: 'Uruguay',
   UZ: 'Uzbekistan',
   VU: 'Vanuatu',
   VE: 'Venezuela (Bolivarian Republic of)',
   VN: 'Viet Nam',
   VG: 'Virgin Islands (British)',
   VI: 'Virgin Islands (U.S.)',
   WF: 'Wallis and Futuna',
   EH: 'Western Sahara',
   YE: 'Yemen',
   ZM: 'Zambia',
   ZW: 'Zimbabwe',
   AX: 'Åland Islands',
}

$(document).ready(function () {
   $('#forecast, #celcius, #farenheit').click(function (e) {
      if (e.target.id === 'farenheit') {
         forecastWeather(' ')
         $('#temp, #temp_min, #temp_max').addClass('d-none')
         $('#tempF, #temp_minF, #temp_maxF').removeClass('d-none')
      }
      if (e.target.id === 'celcius' || e.target.id === 'forecast') {
         let celcius = '&units=metric'
         forecastWeather(celcius)
         $('#tempF, #temp_minF, #temp_maxF').addClass('d-none')
         $('#temp, #temp_min, #temp_max').removeClass('d-none')
      }
   })

   function forecastWeather(celcius) {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q='
      let token = '&appid=14c7e3329c0a2fd5fd361115a1015690'
      let city = $('#city').val()

      $.ajax({
         url: `${url + city + token + celcius}`,
         type: 'get',
         dataType: 'json',
         success: function (data) {
            console.log('Success')
            /*Edit for City pLace */
            let check = $(countryList).prop(data.sys.country)
            $('#cityPlace').text(
               city[0].toUpperCase() + city.slice(1) + ', ' + check
            )
            $('#city').val(city)
            /* changing the Name of City Place*/
            /*INFORMATIONS ON WEATHER*/
            /**----------------------------- */
            /*Temp*/
            $('#temp').text(data.main.temp + '°C')
            $('#tempF').text(data.main.temp + '°F')
            /*Temp*/
            $('#temp_min').text(data.main.temp_min + '°C')
            $('#temp_minF').text(data.main.temp_min + '°F')
            /*temp_min*/
            /*temp_max*/
            $('#temp_max').text(data.main.temp_max + '°C')
            $('#temp_maxF').text(data.main.temp_max + '°F')
            /*temp_max*/
            /**----------------------------- */
            /*Weather*/
            $('#main').text(data.weather[0].main)
            /*Weather*/
            /*humidity*/
            $('#humidity').text(data.main.humidity + 'h')
            /*humidity*/
            /*speed*/
            $('#speed').text(data.wind.speed + 'km/h')
            /*speed*/
            /*description*/
            $('#imgDescription').attr(
               'src',
               'http://openweathermap.org/img/w/' +
                  data.weather[0].icon +
                  '.png'
            )
            $('#description').text(data.weather[0].description)
            /*description*/
            /*temp_min*/

            /*geolocation*/
            $('#geolocation').text(
               'Long: ' + data.coord.lon + ' Lat: ' + data.coord.lat
            )
            /*geolocation*/
            /*INFORMATIONS ON WEATHER*/
         },
         error: function (error) {
            console.log('Error Exception Thrown' + error)
         },
      })
   }
})
