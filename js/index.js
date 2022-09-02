var ids = {"CVE-2021-31996":["RUSTSEC-2021-0053"],"RUSTSEC-2020-0096":["RUSTSEC-2020-0096"],"RUSTSEC-2021-0079":["RUSTSEC-2021-0079"],"RUSTSEC-2020-0164":["RUSTSEC-2020-0164"],"RUSTSEC-2020-0155":["RUSTSEC-2020-0155"],"RUSTSEC-2020-0108":["RUSTSEC-2020-0108"],"CVE-2020-35914":["RUSTSEC-2020-0070"],"RUSTSEC-2020-0003":["RUSTSEC-2020-0003"],"CVE-2019-16138":["RUSTSEC-2019-0014"],"CVE-2021-45710":["RUSTSEC-2021-0124"],"CVE-2020-36463":["RUSTSEC-2020-0143"],"RUSTSEC-2019-0036":["RUSTSEC-2019-0036"],"CVE-2020-36464":["RUSTSEC-2020-0145"],"CVE-2022-1434":["RUSTSEC-2022-0026"],"CVE-2021-38512":["RUSTSEC-2021-0081"],"RUSTSEC-2021-0120":["RUSTSEC-2021-0120"],"RUSTSEC-2021-0052":["RUSTSEC-2021-0052"],"RUSTSEC-2021-0106":["RUSTSEC-2021-0106"],"CVE-2020-25791":["RUSTSEC-2020-0041"],"RUSTSEC-2019-0008":["RUSTSEC-2019-0008"],"RUSTSEC-2020-0143":["RUSTSEC-2020-0143"],"RUSTSEC-2022-0017":["RUSTSEC-2022-0017"],"CVE-2020-35877":["RUSTSEC-2020-0022"],"CVE-2020-35875":["RUSTSEC-2020-0019"],"CVE-2020-35885":["RUSTSEC-2020-0032"],"RUSTSEC-2020-0142":["RUSTSEC-2020-0142"],"CVE-2020-35886":["RUSTSEC-2020-0034"],"CVE-2021-38193":["RUSTSEC-2021-0074"],"CVE-2020-36213":["RUSTSEC-2020-0105"],"RUSTSEC-2020-0063":["RUSTSEC-2020-0063"],"RUSTSEC-2020-0114":["RUSTSEC-2020-0114"],"RUSTSEC-2020-0154":["RUSTSEC-2020-0154"],"CVE-2020-35911":["RUSTSEC-2020-0070"],"GHSA-hpqh-2wqx-7qp5":["RUSTSEC-2021-0067"],"RUSTSEC-2021-0137":["RUSTSEC-2021-0137"],"RUSTSEC-2019-0003":["RUSTSEC-2019-0003"],"RUSTSEC-2021-0050":["RUSTSEC-2021-0050"],"CVE-2020-36209":["RUSTSEC-2020-0102"],"RUSTSEC-2021-0105":["RUSTSEC-2021-0105"],"GHSA-v666-6w97-pcwm":["RUSTSEC-2021-0107"],"CVE-2021-27378":["RUSTSEC-2021-0023"],"CVE-2020-36459":["RUSTSEC-2020-0139"],"CVE-2020-35924":["RUSTSEC-2020-0087"],"RUSTSEC-2020-0122":["RUSTSEC-2020-0122"],"CVE-2020-1967":["RUSTSEC-2020-0015"],"CVE-2021-29941":["RUSTSEC-2021-0050"],"CVE-2020-36211":["RUSTSEC-2020-0104"],"CVE-2020-35869":["RUSTSEC-2020-0014"],"RUSTSEC-2020-0049":["RUSTSEC-2020-0049"],"CVE-2021-3520":["RUSTSEC-2022-0051"],"RUSTSEC-2019-0001":["RUSTSEC-2019-0001"],"RUSTSEC-2019-0035":["RUSTSEC-2019-0035"],"RUSTSEC-2019-0038":["RUSTSEC-2019-0038"],"CVE-2018-20998":["RUSTSEC-2018-0011"],"CVE-2017-1000430":["RUSTSEC-2017-0004"],"CVE-2018-20991":["RUSTSEC-2018-0003"],"RUSTSEC-2022-0030":["RUSTSEC-2022-0030"],"RUSTSEC-2020-0097":["RUSTSEC-2020-0097"],"RUSTSEC-2019-0023":["RUSTSEC-2019-0023"],"RUSTSEC-2021-0110":["RUSTSEC-2021-0110"],"RUSTSEC-2021-0133":["RUSTSEC-2021-0133"],"CVE-2020-35857":["RUSTSEC-2020-0001"],"RUSTSEC-2021-0114":["RUSTSEC-2021-0114"],"RUSTSEC-2021-0102":["RUSTSEC-2021-0102"],"CVE-2020-35927":["RUSTSEC-2020-0090"],"RUSTSEC-2019-0032":["RUSTSEC-2019-0032"],"RUSTSEC-2019-0029":["RUSTSEC-2019-0029"],"RUSTSEC-2019-0025":["RUSTSEC-2019-0025"],"RUSTSEC-2021-0138":["RUSTSEC-2021-0138"],"RUSTSEC-2022-0029":["RUSTSEC-2022-0029"],"CVE-2020-35874":["RUSTSEC-2020-0017"],"CVE-2021-29929":["RUSTSEC-2021-0039"],"RUSTSEC-2020-0040":["RUSTSEC-2020-0040"],"RUSTSEC-2019-0016":["RUSTSEC-2019-0016"],"CVE-2022-2274":["RUSTSEC-2022-0033"],"RUSTSEC-2021-0059":["RUSTSEC-2021-0059"],"RUSTSEC-2020-0081":["RUSTSEC-2020-0081"],"RUSTSEC-2020-0118":["RUSTSEC-2020-0118"],"CVE-2018-21000":["RUSTSEC-2018-0013"],"RUSTSEC-2021-0082":["RUSTSEC-2021-0082"],"CVE-2021-26954":["RUSTSEC-2021-0018"],"RUSTSEC-2020-0017":["RUSTSEC-2020-0017"],"RUSTSEC-2020-0016":["RUSTSEC-2020-0016"],"RUSTSEC-2021-0038":["RUSTSEC-2021-0038"],"CVE-2020-36438":["RUSTSEC-2020-0118"],"RUSTSEC-2021-0007":["RUSTSEC-2021-0007"],"CVE-2022-1343":["RUSTSEC-2022-0027"],"RUSTSEC-2020-0089":["RUSTSEC-2020-0089"],"RUSTSEC-2020-0147":["RUSTSEC-2020-0147"],"CVE-2021-28030":["RUSTSEC-2021-0029"],"RUSTSEC-2020-0085":["RUSTSEC-2020-0085"],"CVE-2020-35859":["RUSTSEC-2020-0004"],"RUSTSEC-2017-0003":["RUSTSEC-2017-0003"],"CVE-2021-3449":["RUSTSEC-2021-0055"],"RUSTSEC-2021-0093":["RUSTSEC-2021-0093"],"RUSTSEC-2020-0078":["RUSTSEC-2020-0078"],"CVE-2021-25908":["RUSTSEC-2021-0011"],"RUSTSEC-2021-0026":["RUSTSEC-2021-0026"],"RUSTSEC-2020-0058":["RUSTSEC-2020-0058"],"RUSTSEC-2021-0107":["RUSTSEC-2021-0107"],"RUSTSEC-2022-0024":["RUSTSEC-2022-0024"],"CVE-2021-38188":["RUSTSEC-2021-0068"],"CVE-2020-36458":["RUSTSEC-2020-0138"],"RUSTSEC-2022-0047":["RUSTSEC-2022-0047"],"CVE-2021-28033":["RUSTSEC-2021-0032"],"CVE-2020-36206":["RUSTSEC-2020-0098"],"RUSTSEC-2020-0065":["RUSTSEC-2020-0065"],"RUSTSEC-2020-0035":["RUSTSEC-2020-0035"],"RUSTSEC-2022-0048":["RUSTSEC-2022-0048"],"RUSTSEC-2021-0057":["RUSTSEC-2021-0057"],"RUSTSEC-2019-0014":["RUSTSEC-2019-0014"],"CVE-2017-18588":["RUSTSEC-2017-0003"],"CVE-2020-35902":["RUSTSEC-2020-0049"],"GHSA-5h46-h7hh-c6x9":["RUSTSEC-2021-0079"],"CVE-2021-3450":["RUSTSEC-2021-0056"],"CVE-2021-38511":["RUSTSEC-2021-0080"],"RUSTSEC-2021-0049":["RUSTSEC-2021-0049"],"CVE-2021-39216":["RUSTSEC-2021-0110"],"CVE-2020-28247":["RUSTSEC-2020-0069"],"CVE-2021-36376":["RUSTSEC-2021-0105"],"RUSTSEC-2020-0071":["RUSTSEC-2020-0071","RUSTSEC-2020-0159"],"RUSTSEC-2020-0148":["RUSTSEC-2020-0148"],"RUSTSEC-2020-0131":["RUSTSEC-2020-0131"],"RUSTSEC-2020-0165":["RUSTSEC-2020-0165"],"CVE-2021-30457":["RUSTSEC-2021-0052"],"RUSTSEC-2022-0034":["RUSTSEC-2022-0034"],"GHSA-6hfq-h8hq-87mf":["RUSTSEC-2021-0020"],"CVE-2021-26958":["RUSTSEC-2021-0019"],"RUSTSEC-2020-0083":["RUSTSEC-2020-0083"],"RUSTSEC-2020-0041":["RUSTSEC-2020-0041"],"CVE-2020-35880":["RUSTSEC-2020-0025"],"RUSTSEC-2020-0025":["RUSTSEC-2020-0025"],"CVE-2021-38190":["RUSTSEC-2021-0070"],"CVE-2020-25792":["RUSTSEC-2020-0041"],"GHSA-82hm-vh7g-hrh9":["RUSTSEC-2021-0103"],"CVE-2021-26306":["RUSTSEC-2021-0013"],"RUSTSEC-2021-0142":["RUSTSEC-2021-0142"],"RUSTSEC-2020-0059":["RUSTSEC-2020-0059"],"RUSTSEC-2022-0037":["RUSTSEC-2022-0037"],"RUSTSEC-2020-0156":["RUSTSEC-2020-0156"],"CVE-2019-25004":["RUSTSEC-2019-0028"],"CVE-2019-16137":["RUSTSEC-2019-0013"],"GHSA-6gvc-4jvj-pwq4":["RUSTSEC-2018-0020"],"CVE-2020-36447":["RUSTSEC-2020-0127"],"GHSA-mm4m-qg48-f7wc":["RUSTSEC-2020-0157"],"GHSA-5xg3-j2j6-rcx4":["RUSTSEC-2021-0105"],"RUSTSEC-2021-0064":["RUSTSEC-2021-0064"],"CVE-2021-28305":["RUSTSEC-2021-0037"],"CVE-2021-25907":["RUSTSEC-2021-0010"],"RUSTSEC-2020-0126":["RUSTSEC-2020-0126"],"CVE-2020-36436":["RUSTSEC-2020-0116"],"CVE-2020-36466":["RUSTSEC-2020-0148"],"CVE-2020-35868":["RUSTSEC-2020-0014"],"CVE-2019-15548":["RUSTSEC-2019-0006"],"CVE-2019-15551":["RUSTSEC-2019-0009"],"RUSTSEC-2021-0099":["RUSTSEC-2021-0099"],"RUSTSEC-2020-0006":["RUSTSEC-2020-0006"],"CVE-2019-16141":["RUSTSEC-2019-0017"],"RUSTSEC-2018-0019":["RUSTSEC-2018-0019"],"RUSTSEC-2020-0139":["RUSTSEC-2020-0139"],"CVE-2020-35919":["RUSTSEC-2020-0078"],"RUSTSEC-2020-0030":["RUSTSEC-2020-0030"],"RUSTSEC-2020-0048":["RUSTSEC-2020-0048"],"RUSTSEC-2019-0021":["RUSTSEC-2019-0021"],"RUSTSEC-2018-0007":["RUSTSEC-2018-0007"],"RUSTSEC-2020-0123":["RUSTSEC-2020-0123"],"RUSTSEC-2018-0022":["RUSTSEC-2018-0022"],"RUSTSEC-2022-0052":["RUSTSEC-2022-0052"],"GHSA-xq3c-8gqm-v648":["RUSTSEC-2022-0038","RUSTSEC-2022-0037"],"GHSA-f3pg-qwvg-p99c":["RUSTSEC-2021-0078"],"CVE-2020-35884":["RUSTSEC-2020-0031"],"CVE-2020-13759":["RUSTSEC-2020-0157"],"CVE-2020-35896":["RUSTSEC-2020-0043"],"GHSA-vc5p-j8vw-mc6x":["RUSTSEC-2021-0101"],"RUSTSEC-2020-0095":["RUSTSEC-2020-0095"],"CVE-2020-35888":["RUSTSEC-2020-0034"],"CVE-2019-25008":["RUSTSEC-2019-0033"],"CVE-2021-26305":["RUSTSEC-2021-0012"],"CVE-2021-32715":["RUSTSEC-2021-0078"],"RUSTSEC-2022-0046":["RUSTSEC-2022-0046"],"RUSTSEC-2021-0119":["RUSTSEC-2021-0119"],"RUSTSEC-2021-0136":["RUSTSEC-2021-0136"],"RUSTSEC-2020-0149":["RUSTSEC-2020-0149"],"RUSTSEC-2021-0063":["RUSTSEC-2021-0063"],"RUSTSEC-2021-0070":["RUSTSEC-2021-0070"],"CVE-2020-35926":["RUSTSEC-2020-0089"],"RUSTSEC-2021-0016":["RUSTSEC-2021-0016"],"RUSTSEC-2020-0134":["RUSTSEC-2020-0134"],"CVE-2020-35887":["RUSTSEC-2020-0034"],"CVE-2020-36433":["RUSTSEC-2020-0035"],"RUSTSEC-2020-0161":["RUSTSEC-2020-0161"],"RUSTSEC-2021-0039":["RUSTSEC-2021-0039"],"CVE-2020-26235":["RUSTSEC-2020-0071","RUSTSEC-2020-0159"],"RUSTSEC-2021-0121":["RUSTSEC-2021-0121"],"RUSTSEC-2021-0081":["RUSTSEC-2021-0081"],"CVE-2019-15549":["RUSTSEC-2019-0007"],"RUSTSEC-2018-0013":["RUSTSEC-2018-0013"],"CVE-2019-16882":["RUSTSEC-2019-0023"],"CVE-2018-1000622":["CVE-2018-1000622"],"RUSTSEC-2016-0003":["RUSTSEC-2016-0003"],"CVE-2019-15550":["RUSTSEC-2019-0008"],"RUSTSEC-2021-0085":["RUSTSEC-2021-0085"],"RUSTSEC-2021-0027":["RUSTSEC-2021-0027"],"RUSTSEC-2022-0049":["RUSTSEC-2022-0049"],"RUSTSEC-2021-0134":["RUSTSEC-2021-0134"],"CVE-2020-36323":["CVE-2020-36323"],"GHSA-f3fg-5j9p-vchc":["RUSTSEC-2021-0104"],"CVE-2020-35895":["RUSTSEC-2020-0042"],"RUSTSEC-2020-0012":["RUSTSEC-2020-0012"],"GHSA-7cqg-8449-rmfv":["RUSTSEC-2020-0156"],"RUSTSEC-2019-0015":["RUSTSEC-2019-0015"],"RUSTSEC-2021-0125":["RUSTSEC-2021-0125"],"CAN-2021-1000007":["RUSTSEC-2021-0041"],"RUSTSEC-2021-0044":["RUSTSEC-2021-0044"],"CVE-2018-20995":["RUSTSEC-2018-0008"],"RUSTSEC-2021-0060":["RUSTSEC-2021-0060"],"CVE-2021-32629":["RUSTSEC-2021-0067"],"RUSTSEC-2021-0046":["RUSTSEC-2021-0046"],"RUSTSEC-2020-0072":["RUSTSEC-2020-0072"],"CVE-2020-35864":["RUSTSEC-2020-0009"],"RUSTSEC-2020-0112":["RUSTSEC-2020-0112"],"RUSTSEC-2021-0108":["RUSTSEC-2021-0108"],"RUSTSEC-2020-0077":["RUSTSEC-2020-0077"],"CVE-2020-36204":["RUSTSEC-2020-0096"],"RUSTSEC-2020-0100":["RUSTSEC-2020-0100"],"CVE-2020-25795":["RUSTSEC-2020-0041"],"RUSTSEC-2022-0019":["RUSTSEC-2022-0019"],"RUSTSEC-2022-0015":["RUSTSEC-2022-0015"],"CVE-2021-29938":["RUSTSEC-2021-0047"],"CVE-2020-36207":["RUSTSEC-2020-0099"],"RUSTSEC-2022-0004":["RUSTSEC-2022-0004"],"CVE-2021-29937":["RUSTSEC-2021-0046"],"GHSA-mmc9-pwm7-qj5w":["RUSTSEC-2019-0035"],"CVE-2018-20997":["RUSTSEC-2018-0010"],"RUSTSEC-2022-0042":["RUSTSEC-2022-0042"],"RUSTSEC-2022-0021":["RUSTSEC-2022-0021"],"CVE-2020-35871":["RUSTSEC-2020-0014"],"RUSTSEC-2020-0022":["RUSTSEC-2020-0022"],"RUSTSEC-2017-0006":["RUSTSEC-2017-0006"],"RUSTSEC-2020-0146":["RUSTSEC-2020-0146"],"RUSTSEC-2021-0045":["RUSTSEC-2021-0045"],"RUSTSEC-2021-0009":["RUSTSEC-2021-0009"],"RUSTSEC-2021-0087":["RUSTSEC-2021-0087"],"CVE-2020-36467":["RUSTSEC-2020-0148"],"CVE-2019-16144":["RUSTSEC-2019-0020"],"CVE-2021-29936":["RUSTSEC-2021-0045"],"CVE-2021-38186":["RUSTSEC-2021-0063"],"CVE-2021-31919":["RUSTSEC-2021-0054"],"RUSTSEC-2021-0073":["RUSTSEC-2021-0073"],"CVE-2021-23840":["RUSTSEC-2021-0057"],"RUSTSEC-2021-0111":["RUSTSEC-2021-0111"],"CVE-2021-28875":["CVE-2021-28875"],"CVE-2020-35920":["RUSTSEC-2020-0079"],"CVE-2022-31173":["RUSTSEC-2022-0038"],"RUSTSEC-2021-0071":["RUSTSEC-2021-0071"],"RUSTSEC-2020-0044":["RUSTSEC-2020-0044"],"RUSTSEC-2019-0004":["RUSTSEC-2019-0004"],"CVE-2017-1000168":["RUSTSEC-2017-0001"],"RUSTSEC-2016-0006":["RUSTSEC-2016-0006"],"RUSTSEC-2022-0007":["RUSTSEC-2022-0007"],"RUSTSEC-2021-0017":["RUSTSEC-2021-0017"],"CVE-2020-36472":["RUSTSEC-2020-0152"],"RUSTSEC-2020-0094":["RUSTSEC-2020-0094"],"RUSTSEC-2021-0095":["RUSTSEC-2021-0095"],"CVE-2020-35893":["RUSTSEC-2020-0039"],"CVE-2021-28306":["RUSTSEC-2021-0038"],"RUSTSEC-2020-0119":["RUSTSEC-2020-0119"],"RUSTSEC-2022-0011":["RUSTSEC-2022-0011"],"CVE-2020-8927":["RUSTSEC-2021-0131","RUSTSEC-2021-0132"],"CVE-2019-16143":["RUSTSEC-2019-0019"],"RUSTSEC-2021-0129":["RUSTSEC-2021-0129"],"CVE-2021-30456":["RUSTSEC-2021-0052"],"RUSTSEC-2021-0035":["RUSTSEC-2021-0035"],"RUSTSEC-2021-0130":["RUSTSEC-2021-0130"],"CVE-2018-20992":["RUSTSEC-2018-0004"],"RUSTSEC-2020-0144":["RUSTSEC-2020-0144"],"RUSTSEC-2021-0062":["RUSTSEC-2021-0062"],"CVE-2021-4044":["RUSTSEC-2021-0129"],"CVE-2020-36449":["RUSTSEC-2020-0129"],"RUSTSEC-2020-0074":["RUSTSEC-2020-0074"],"RUSTSEC-2020-0102":["RUSTSEC-2020-0102"],"RUSTSEC-2020-0116":["RUSTSEC-2020-0116"],"CVE-2020-36460":["RUSTSEC-2020-0140"],"RUSTSEC-2021-0141":["RUSTSEC-2021-0141"],"RUSTSEC-2021-0135":["RUSTSEC-2021-0135"],"RUSTSEC-2021-0055":["RUSTSEC-2021-0055"],"RUSTSEC-2022-0038":["RUSTSEC-2022-0038"],"RUSTSEC-2022-0020":["RUSTSEC-2022-0020"],"CVE-2021-27671":["RUSTSEC-2021-0026"],"RUSTSEC-2021-0116":["RUSTSEC-2021-0116"],"RUSTSEC-2020-0037":["RUSTSEC-2020-0037"],"CVE-2020-36432":["RUSTSEC-2020-0033"],"CVE-2020-35897":["RUSTSEC-2020-0044"],"GHSA-45p7-c959-rgcm":["RUSTSEC-2021-0109"],"GHSA-5q2r-92f9-4m49":["RUSTSEC-2020-0024"],"RUSTSEC-2021-0008":["RUSTSEC-2021-0008"],"CVE-2021-29939":["RUSTSEC-2021-0048"],"CVE-2021-26956":["RUSTSEC-2021-0019"],"CVE-2020-35909":["RUSTSEC-2020-0068"],"RUSTSEC-2020-0051":["RUSTSEC-2020-0051"],"CVE-2020-35870":["RUSTSEC-2020-0014"],"CVE-2020-35861":["RUSTSEC-2020-0006"],"RUSTSEC-2020-0045":["RUSTSEC-2020-0045"],"RUSTSEC-2019-0027":["RUSTSEC-2019-0027"],"CVE-2021-31162":["CVE-2021-31162"],"RUSTSEC-2021-0030":["RUSTSEC-2021-0030"],"CVE-2021-28308":["RUSTSEC-2021-0038"],"CVE-2021-29933":["RUSTSEC-2021-0042"],"RUSTSEC-2020-0101":["RUSTSEC-2020-0101"],"RUSTSEC-2020-0014":["RUSTSEC-2020-0014"],"CVE-2021-25900":["RUSTSEC-2021-0003"],"RUSTSEC-2021-0058":["RUSTSEC-2021-0058"],"CVE-2020-36219":["RUSTSEC-2020-0113"],"RUSTSEC-2020-0020":["RUSTSEC-2020-0020"],"RUSTSEC-2021-0034":["RUSTSEC-2021-0034"],"CVE-2018-20990":["RUSTSEC-2018-0002"],"CVE-2017-18589":["RUSTSEC-2017-0005"],"RUSTSEC-2019-0013":["RUSTSEC-2019-0013"],"CVE-2020-35872":["RUSTSEC-2020-0014"],"CVE-2019-15543":["RUSTSEC-2019-0002"],"RUSTSEC-2022-0050":["RUSTSEC-2022-0050"],"CVE-2021-28027":["RUSTSEC-2021-0027"],"CVE-2019-25002":["RUSTSEC-2019-0026"],"CVE-2020-36442":["RUSTSEC-2020-0122"],"CVE-2021-31154":["RUSTSEC-2021-0102"],"RUSTSEC-2019-0022":["RUSTSEC-2019-0022"],"CVE-2020-35879":["RUSTSEC-2020-0023"],"CVE-2019-25009":["RUSTSEC-2019-0034"],"CVE-2022-24713":["RUSTSEC-2022-0013"],"RUSTSEC-2021-0074":["RUSTSEC-2021-0074"],"CVE-2020-35899":["RUSTSEC-2020-0046"],"RUSTSEC-2021-0124":["RUSTSEC-2021-0124"],"RUSTSEC-2020-0052":["RUSTSEC-2020-0052"],"RUSTSEC-2022-0010":["RUSTSEC-2022-0010"],"RUSTSEC-2021-0031":["RUSTSEC-2021-0031"],"RUSTSEC-2019-0034":["RUSTSEC-2019-0034"],"RUSTSEC-2017-0007":["RUSTSEC-2017-0007"],"RUSTSEC-2019-0012":["RUSTSEC-2019-0012"],"RUSTSEC-2019-0033":["RUSTSEC-2019-0033"],"GHSA-pp74-39w2-v4w9":["RUSTSEC-2021-0102"],"CVE-2020-35916":["RUSTSEC-2020-0073"],"GHSA-qc84-gqf4-9926":["RUSTSEC-2022-0041"],"CVE-2021-3712":["RUSTSEC-2021-0098"],"CVE-2021-26951":["RUSTSEC-2021-0015"],"RUSTSEC-2021-0109":["RUSTSEC-2021-0109"],"RUSTSEC-2020-0050":["RUSTSEC-2020-0050"],"CVE-2021-31153":["RUSTSEC-2021-0104"],"RUSTSEC-2021-0018":["RUSTSEC-2021-0018"],"CVE-2020-36318":["CVE-2020-36318"],"RUSTSEC-2020-0038":["RUSTSEC-2020-0038"],"RUSTSEC-2020-0029":["RUSTSEC-2020-0029"],"RUSTSEC-2020-0158":["RUSTSEC-2020-0158"],"RUSTSEC-2019-0010":["RUSTSEC-2019-0010"],"RUSTSEC-2022-0028":["RUSTSEC-2022-0028"],"CVE-2018-20996":["RUSTSEC-2018-0009"],"RUSTSEC-2021-0020":["RUSTSEC-2021-0020"],"RUSTSEC-2021-0001":["RUSTSEC-2021-0001"],"CVE-2020-35862":["RUSTSEC-2020-0007"],"RUSTSEC-2020-0163":["RUSTSEC-2020-0163"],"CVE-2020-6174":["RUSTSEC-2020-0024"],"CVE-2020-35860":["RUSTSEC-2020-0005"],"CVE-2020-36208":["RUSTSEC-2020-0101"],"RUSTSEC-2016-0001":["RUSTSEC-2016-0001","RUSTSEC-2016-0002"],"RUSTSEC-2022-0018":["RUSTSEC-2022-0018"],"RUSTSEC-2021-0132":["RUSTSEC-2021-0132"],"CVE-2020-35876":["RUSTSEC-2020-0021"],"RUSTSEC-2022-0008":["RUSTSEC-2022-0008"],"RUSTSEC-2021-0004":["RUSTSEC-2021-0004"],"RUSTSEC-2022-0039":["RUSTSEC-2022-0039"],"RUSTSEC-2020-0133":["RUSTSEC-2020-0133"],"CVE-2022-1473":["RUSTSEC-2022-0025"],"RUSTSEC-2020-0132":["RUSTSEC-2020-0132"],"RUSTSEC-2022-0006":["RUSTSEC-2022-0006"],"CVE-2020-36444":["RUSTSEC-2020-0124"],"CVE-2020-36317":["CVE-2020-36317"],"CVE-2020-35881":["RUSTSEC-2020-0027"],"CVE-2022-2097":["RUSTSEC-2022-0032"],"RUSTSEC-2021-0104":["RUSTSEC-2021-0104"],"CVE-2020-35913":["RUSTSEC-2020-0070"],"RUSTSEC-2020-0060":["RUSTSEC-2020-0060"],"RUSTSEC-2020-0013":["RUSTSEC-2020-0013"],"RUSTSEC-2021-0028":["RUSTSEC-2021-0028"],"CVE-2021-25905":["RUSTSEC-2021-0008"],"CVE-2020-35898":["RUSTSEC-2020-0045"],"RUSTSEC-2021-0043":["RUSTSEC-2021-0043"],"RUSTSEC-2020-0015":["RUSTSEC-2020-0015"],"RUSTSEC-2021-0015":["RUSTSEC-2021-0015"],"RUSTSEC-2021-0002":["RUSTSEC-2021-0002"],"RUSTSEC-2021-0053":["RUSTSEC-2021-0053"],"RUSTSEC-2021-0022":["RUSTSEC-2021-0022"],"CVE-2021-25903":["RUSTSEC-2021-0006"],"CVE-2020-36437":["RUSTSEC-2020-0117"],"RUSTSEC-2020-0117":["RUSTSEC-2020-0117"],"RUSTSEC-2021-0076":["RUSTSEC-2021-0076"],"RUSTSEC-2021-0024":["RUSTSEC-2021-0024"],"CVE-2020-36216":["RUSTSEC-2020-0108"],"RUSTSEC-2020-0073":["RUSTSEC-2020-0073"],"RUSTSEC-2020-0145":["RUSTSEC-2020-0145"],"CVE-2022-23639":["RUSTSEC-2022-0041"],"RUSTSEC-2021-0029":["RUSTSEC-2021-0029"],"RUSTSEC-2020-0064":["RUSTSEC-2020-0064"],"RUSTSEC-2020-0055":["RUSTSEC-2020-0055"],"CVE-2020-35900":["RUSTSEC-2020-0047"],"RUSTSEC-2020-0032":["RUSTSEC-2020-0032"],"GHSA-v5m7-53cv-f3hx":["RUSTSEC-2020-0052"],"RUSTSEC-2022-0013":["RUSTSEC-2022-0013"],"RUSTSEC-2021-0014":["RUSTSEC-2021-0014"],"RUSTSEC-2021-0010":["RUSTSEC-2021-0010"],"RUSTSEC-2019-0017":["RUSTSEC-2019-0017"],"RUSTSEC-2021-0078":["RUSTSEC-2021-0078"],"RUSTSEC-2022-0031":["RUSTSEC-2022-0031"],"CVE-2019-15544":["RUSTSEC-2019-0003"],"RUSTSEC-2020-0104":["RUSTSEC-2020-0104"],"CVE-2021-28878":["CVE-2021-28878"],"RUSTSEC-2021-0103":["RUSTSEC-2021-0103"],"CVE-2021-31155":["RUSTSEC-2021-0101"],"RUSTSEC-2020-0057":["RUSTSEC-2020-0057"],"CVE-2020-25796":["RUSTSEC-2020-0041"],"RUSTSEC-2020-0039":["RUSTSEC-2020-0039"],"RUSTSEC-2021-0131":["RUSTSEC-2021-0131"],"GHSA-p24j-h477-76q3":["RUSTSEC-2021-0106"],"RUSTSEC-2018-0006":["RUSTSEC-2018-0006"],"CVE-2021-29942":["RUSTSEC-2021-0050"],"RUSTSEC-2021-0033":["RUSTSEC-2021-0033"],"CVE-2020-36434":["RUSTSEC-2020-0100"],"RUSTSEC-2019-0019":["RUSTSEC-2019-0019"],"RUSTSEC-2022-0009":["RUSTSEC-2022-0009"],"RUSTSEC-2021-0067":["RUSTSEC-2021-0067"],"RUSTSEC-2021-0075":["RUSTSEC-2021-0075"],"RUSTSEC-2021-0036":["RUSTSEC-2021-0036"],"RUSTSEC-2018-0015":["RUSTSEC-2018-0015"],"RUSTSEC-2020-0127":["RUSTSEC-2020-0127"],"GHSA-4rx6-g5vg-5f3j":["RUSTSEC-2022-0038","RUSTSEC-2022-0037"],"CVE-2020-36456":["RUSTSEC-2020-0136"],"RUSTSEC-2020-0092":["RUSTSEC-2020-0092"],"RUSTSEC-2020-0068":["RUSTSEC-2020-0068"],"CVE-2019-20399":["RUSTSEC-2020-0156"],"CVE-2021-38187":["RUSTSEC-2021-0065"],"RUSTSEC-2022-0044":["RUSTSEC-2022-0044"],"CVE-2021-21299":["RUSTSEC-2021-0020"],"CVE-2021-38191":["RUSTSEC-2021-0072"],"RUSTSEC-2022-0003":["RUSTSEC-2022-0003"],"CVE-2020-25573":["RUSTSEC-2020-0026"],"RUSTSEC-2019-0009":["RUSTSEC-2019-0009"],"CVE-2020-36468":["RUSTSEC-2020-0148"],"RUSTSEC-2020-0088":["RUSTSEC-2020-0088"],"CVE-2022-21658":["CVE-2022-21658"],"CVE-2020-35878":["RUSTSEC-2020-0022"],"CVE-2020-36210":["RUSTSEC-2020-0103"],"RUSTSEC-2020-0028":["RUSTSEC-2020-0028"],"CVE-2020-35866":["RUSTSEC-2020-0014"],"RUSTSEC-2020-0106":["RUSTSEC-2020-0106"],"CVE-2020-35873":["RUSTSEC-2020-0014"],"RUSTSEC-2022-0001":["RUSTSEC-2022-0001"],"RUSTSEC-2021-0083":["RUSTSEC-2021-0083"],"RUSTSEC-2020-0113":["RUSTSEC-2020-0113"],"RUSTSEC-2022-0036":["RUSTSEC-2022-0036"],"RUSTSEC-2019-0002":["RUSTSEC-2019-0002"],"RUSTSEC-2021-0089":["RUSTSEC-2021-0089"],"CVE-2016-10933":["RUSTSEC-2016-0003"],"RUSTSEC-2021-0127":["RUSTSEC-2021-0127"],"RUSTSEC-2020-0033":["RUSTSEC-2020-0033"],"RUSTSEC-2021-0086":["RUSTSEC-2021-0086"],"CVE-2020-36435":["RUSTSEC-2020-0115"],"CVE-2020-36443":["RUSTSEC-2020-0123"],"CVE-2020-35883":["RUSTSEC-2020-0030"],"CVE-2020-36203":["RUSTSEC-2020-0094"],"CVE-2020-36455":["RUSTSEC-2020-0135"],"RUSTSEC-2021-0025":["RUSTSEC-2021-0025"],"CVE-2020-36440":["RUSTSEC-2020-0120"],"RUSTSEC-2018-0004":["RUSTSEC-2018-0004"],"CVE-2021-38195":["RUSTSEC-2021-0076"],"CVE-2021-3711":["RUSTSEC-2021-0097"],"RUSTSEC-2020-0066":["RUSTSEC-2020-0066"],"RUSTSEC-2018-0017":["RUSTSEC-2018-0017"],"RUSTSEC-2021-0098":["RUSTSEC-2021-0098"],"CVE-2020-36452":["RUSTSEC-2020-0132"],"CVE-2019-15554":["RUSTSEC-2019-0012"],"GHSA-phjm-8x66-qw4r":["CVE-2019-16760"],"CVE-2021-38189":["RUSTSEC-2021-0069"],"RUSTSEC-2021-0140":["RUSTSEC-2021-0140"],"RUSTSEC-2021-0115":["RUSTSEC-2021-0115"],"CVE-2021-27377":["RUSTSEC-2021-0022"],"CVE-2021-25904":["RUSTSEC-2021-0007"],"CVE-2021-38196":["RUSTSEC-2021-0077"],"RUSTSEC-2022-0016":["RUSTSEC-2022-0016"],"RUSTSEC-2022-0033":["RUSTSEC-2022-0033"],"RUSTSEC-2020-0129":["RUSTSEC-2020-0129"],"CVE-2020-36205":["RUSTSEC-2020-0097"],"CVE-2020-35903":["RUSTSEC-2020-0050"],"RUSTSEC-2020-0042":["RUSTSEC-2020-0042"],"CVE-2019-15547":["RUSTSEC-2019-0006"],"RUSTSEC-2021-0042":["RUSTSEC-2021-0042"],"RUSTSEC-2018-0005":["RUSTSEC-2018-0005"],"RUSTSEC-2021-0080":["RUSTSEC-2021-0080"],"RUSTSEC-2021-0066":["RUSTSEC-2021-0066"],"RUSTSEC-2021-0005":["RUSTSEC-2021-0005"],"RUSTSEC-2020-0011":["RUSTSEC-2020-0011"],"RUSTSEC-2020-0023":["RUSTSEC-2020-0023"],"RUSTSEC-2019-0030":["RUSTSEC-2019-0030"],"RUSTSEC-2020-0008":["RUSTSEC-2020-0008"],"CVE-2019-15553":["RUSTSEC-2019-0011"],"RUSTSEC-2020-0150":["RUSTSEC-2020-0150"],"RUSTSEC-2021-0128":["RUSTSEC-2021-0128"],"RUSTSEC-2021-0040":["RUSTSEC-2021-0040"],"RUSTSEC-2018-0021":["RUSTSEC-2018-0021"],"RUSTSEC-2017-0002":["RUSTSEC-2017-0002"],"CVE-2019-16880":["RUSTSEC-2019-0021"],"CVE-2016-10931":["RUSTSEC-2016-0001"],"CVE-2021-30454":["RUSTSEC-2021-0051"],"CVE-2019-15546":["RUSTSEC-2019-0005"],"CVE-2018-25008":["CVE-2018-25008"],"RUSTSEC-2021-0003":["RUSTSEC-2021-0003"],"RUSTSEC-2022-0014":["RUSTSEC-2022-0014"],"CVE-2020-36446":["RUSTSEC-2020-0126"],"RUSTSEC-2018-0009":["RUSTSEC-2018-0009"],"CVE-2021-30455":["RUSTSEC-2021-0052"],"CVE-2021-39219":["RUSTSEC-2021-0110"],"CVE-2021-28035":["RUSTSEC-2021-0033"],"CVE-2021-26952":["RUSTSEC-2021-0016"],"RUSTSEC-2020-0157":["RUSTSEC-2020-0157"],"CVE-2021-29922":["CVE-2021-29922"],"CVE-2020-35867":["RUSTSEC-2020-0014"],"RUSTSEC-2022-0022":["RUSTSEC-2022-0022"],"RUSTSEC-2020-0005":["RUSTSEC-2020-0005"],"CVE-2020-35908":["RUSTSEC-2020-0062"],"RUSTSEC-2020-0004":["RUSTSEC-2020-0004"],"RUSTSEC-2020-0090":["RUSTSEC-2020-0090"],"CVE-2021-39218":["RUSTSEC-2021-0110"],"CVE-2020-36470":["RUSTSEC-2020-0150"],"CVE-2018-1000810":["CVE-2018-1000810"],"RUSTSEC-2020-0027":["RUSTSEC-2020-0027"],"RUSTSEC-2019-0007":["RUSTSEC-2019-0007"],"CVE-2020-36215":["RUSTSEC-2020-0107"],"CVE-2021-28036":["RUSTSEC-2021-0035"],"CVE-2021-29935":["RUSTSEC-2021-0044"],"RUSTSEC-2020-0082":["RUSTSEC-2020-0082"],"CVE-2020-36457":["RUSTSEC-2020-0137"],"CVE-2021-28028":["RUSTSEC-2021-0028"],"RUSTSEC-2020-0047":["RUSTSEC-2020-0047"],"CVE-2021-28879":["CVE-2021-28879"],"CVE-2020-36212":["RUSTSEC-2020-0105"],"CVE-2020-36453":["RUSTSEC-2020-0133"],"CVE-2020-35915":["RUSTSEC-2020-0072"],"RUSTSEC-2020-0135":["RUSTSEC-2020-0135"],"CVE-2020-35865":["RUSTSEC-2020-0012"],"RUSTSEC-2021-0096":["RUSTSEC-2021-0096"],"CVE-2020-36214":["RUSTSEC-2020-0106"],"RUSTSEC-2020-0125":["RUSTSEC-2020-0125"],"CVE-2020-35863":["RUSTSEC-2020-0008"],"RUSTSEC-2020-0160":["RUSTSEC-2020-0160"],"CVE-2019-25005":["RUSTSEC-2019-0029"],"CVE-2019-15552":["RUSTSEC-2019-0010"],"RUSTSEC-2020-0018":["RUSTSEC-2020-0018"],"CVE-2016-10932":["RUSTSEC-2016-0002"],"RUSTSEC-2020-0137":["RUSTSEC-2020-0137"],"RUSTSEC-2021-0094":["RUSTSEC-2021-0094"],"CVE-2021-29930":["RUSTSEC-2021-0040"],"CVE-2020-36471":["RUSTSEC-2020-0151"],"RUSTSEC-2020-0111":["RUSTSEC-2020-0111"],"CVE-2020-36454":["RUSTSEC-2020-0134"],"CVE-2022-31100":["RUSTSEC-2022-0031"],"CVE-2020-35928":["RUSTSEC-2020-0092"],"CVE-2020-35922":["RUSTSEC-2020-0081"],"CVE-2020-15254":["RUSTSEC-2020-0052"],"CVE-2019-25003":["RUSTSEC-2019-0027"],"CVE-2019-25001":["RUSTSEC-2019-0025"],"RUSTSEC-2019-0011":["RUSTSEC-2019-0011"],"CVE-2020-36445":["RUSTSEC-2020-0125"],"GHSA-48vq-8jqv-gm6f":["RUSTSEC-2021-0108"],"RUSTSEC-2021-0084":["RUSTSEC-2021-0084"],"RUSTSEC-2022-0005":["RUSTSEC-2022-0005"],"RUSTSEC-2020-0141":["RUSTSEC-2020-0141"],"RUSTSEC-2020-0115":["RUSTSEC-2020-0115"],"RUSTSEC-2020-0136":["RUSTSEC-2020-0136"],"CVE-2019-16139":["RUSTSEC-2019-0015"],"CVE-2019-25010":["RUSTSEC-2019-0036"],"RUSTSEC-2020-0021":["RUSTSEC-2020-0021"],"CVE-2020-36461":["RUSTSEC-2020-0141"],"RUSTSEC-2020-0067":["RUSTSEC-2020-0067"],"RUSTSEC-2020-0036":["RUSTSEC-2020-0036"],"RUSTSEC-2020-0093":["RUSTSEC-2020-0093"],"RUSTSEC-2019-0024":["RUSTSEC-2019-0024"],"CVE-2020-35894":["RUSTSEC-2020-0040"],"RUSTSEC-2018-0003":["RUSTSEC-2018-0003"],"CVE-2020-36469":["RUSTSEC-2020-0149"],"RUSTSEC-2018-0016":["RUSTSEC-2018-0016"],"CVE-2020-25575":["RUSTSEC-2020-0036","RUSTSEC-2019-0036","RUSTSEC-2019-0030"],"CVE-2019-16760":["CVE-2019-16760"],"CVE-2017-20004":["CVE-2017-20004"],"RUSTSEC-2021-0112":["RUSTSEC-2021-0112"],"RUSTSEC-2021-0068":["RUSTSEC-2021-0068"],"RUSTSEC-2020-0151":["RUSTSEC-2020-0151"],"CVE-2017-18587":["RUSTSEC-2017-0002"],"CVE-2021-28034":["RUSTSEC-2021-0033"],"RUSTSEC-2022-0002":["RUSTSEC-2022-0002"],"RUSTSEC-2020-0080":["RUSTSEC-2020-0080"],"RUSTSEC-2020-0109":["RUSTSEC-2020-0109"],"RUSTSEC-2020-0034":["RUSTSEC-2020-0034"],"RUSTSEC-2021-0117":["RUSTSEC-2021-0117"],"RUSTSEC-2020-0130":["RUSTSEC-2020-0130"],"RUSTSEC-2020-0069":["RUSTSEC-2020-0069"],"CVE-2015-20001":["CVE-2015-20001"],"RUSTSEC-2021-0012":["RUSTSEC-2021-0012"],"CVE-2021-28029":["RUSTSEC-2021-0028"],"RUSTSEC-2021-0041":["RUSTSEC-2021-0041"],"RUSTSEC-2020-0046":["RUSTSEC-2020-0046"],"CVE-2020-25793":["RUSTSEC-2020-0041"],"RUSTSEC-2021-0048":["RUSTSEC-2021-0048"],"RUSTSEC-2020-0128":["RUSTSEC-2020-0128"],"CVE-2022-24791":["RUSTSEC-2022-0016"],"RUSTSEC-2020-0120":["RUSTSEC-2020-0120"],"CVE-2019-16881":["RUSTSEC-2019-0022"],"CVE-2019-16140":["RUSTSEC-2019-0016"],"CVE-2021-38194":["RUSTSEC-2021-0075"],"RUSTSEC-2020-0107":["RUSTSEC-2020-0107"],"RUSTSEC-2020-0019":["RUSTSEC-2020-0019"],"CVE-2020-35891":["RUSTSEC-2020-0038"],"RUSTSEC-2020-0056":["RUSTSEC-2020-0056"],"RUSTSEC-2019-0005":["RUSTSEC-2019-0005"],"CVE-2021-29932":["RUSTSEC-2021-0041"],"RUSTSEC-2019-0020":["RUSTSEC-2019-0020"],"CVE-2020-35711":["RUSTSEC-2020-0091"],"RUSTSEC-2018-0018":["RUSTSEC-2018-0018"],"CVE-2020-35907":["RUSTSEC-2020-0061"],"CVE-2018-20994":["RUSTSEC-2018-0007"],"RUSTSEC-2020-0159":["RUSTSEC-2020-0159"],"RUSTSEC-2022-0051":["RUSTSEC-2022-0051"],"CVE-2020-25574":["RUSTSEC-2019-0033"],"RUSTSEC-2020-0070":["RUSTSEC-2020-0070"],"CVE-2020-26281":["RUSTSEC-2020-0093"],"RUSTSEC-2021-0019":["RUSTSEC-2021-0019"],"RUSTSEC-2019-0006":["RUSTSEC-2019-0006"],"CVE-2018-1000657":["CVE-2018-1000657"],"RUSTSEC-2022-0053":["RUSTSEC-2022-0053"],"RUSTSEC-2019-0037":["RUSTSEC-2019-0037"],"GHSA-ghpq-vjxw-ch5w":["RUSTSEC-2018-0021"],"RUSTSEC-2016-0004":["RUSTSEC-2016-0004"],"CVE-2020-36220":["RUSTSEC-2020-0114"],"RUSTSEC-2020-0084":["RUSTSEC-2020-0084"],"RUSTSEC-2021-0092":["RUSTSEC-2021-0092"],"RUSTSEC-2021-0090":["RUSTSEC-2021-0090"],"RUSTSEC-2020-0103":["RUSTSEC-2020-0103"],"RUSTSEC-2020-0121":["RUSTSEC-2020-0121"],"RUSTSEC-2018-0020":["RUSTSEC-2018-0020"],"CVE-2020-36218":["RUSTSEC-2020-0112"],"CVE-2020-35910":["RUSTSEC-2020-0070"],"CVE-2022-31099":["RUSTSEC-2022-0030"],"CVE-2021-36753":["RUSTSEC-2021-0106"],"CVE-2021-26953":["RUSTSEC-2021-0017"],"RUSTSEC-2021-0088":["RUSTSEC-2021-0088"],"CVE-2020-35892":["RUSTSEC-2020-0039"],"CVE-2020-35889":["RUSTSEC-2020-0037"],"RUSTSEC-2020-0001":["RUSTSEC-2020-0001"],"RUSTSEC-2019-0028":["RUSTSEC-2019-0028"],"GHSA-pqqp-xmhj-wgcw":["RUSTSEC-2021-0093"],"CVE-2019-1010299":["CVE-2019-1010299"],"CVE-2021-29931":["RUSTSEC-2021-0040"],"RUSTSEC-2020-0153":["RUSTSEC-2020-0153"],"CVE-2021-32714":["RUSTSEC-2021-0079"],"CVE-2021-28876":["CVE-2021-28876"],"RUSTSEC-2019-0031":["RUSTSEC-2019-0031"],"RUSTSEC-2017-0001":["RUSTSEC-2017-0001"],"RUSTSEC-2021-0091":["RUSTSEC-2021-0091"],"RUSTSEC-2020-0138":["RUSTSEC-2020-0138"],"RUSTSEC-2021-0072":["RUSTSEC-2021-0072"],"RUSTSEC-2021-0047":["RUSTSEC-2021-0047"],"CVE-2020-35858":["RUSTSEC-2020-0002"],"RUSTSEC-2020-0061":["RUSTSEC-2020-0061"],"RUSTSEC-2021-0100":["RUSTSEC-2021-0100"],"RUSTSEC-2021-0077":["RUSTSEC-2021-0077"],"RUSTSEC-2017-0004":["RUSTSEC-2017-0004"],"RUSTSEC-2016-0002":["RUSTSEC-2016-0002"],"CVE-2019-15542":["RUSTSEC-2019-0001"],"RUSTSEC-2022-0040":["RUSTSEC-2022-0040"],"RUSTSEC-2020-0098":["RUSTSEC-2020-0098"],"RUSTSEC-2020-0002":["RUSTSEC-2020-0002"],"CVE-2021-43620":["RUSTSEC-2021-0123"],"RUSTSEC-2018-0001":["RUSTSEC-2018-0001"],"RUSTSEC-2021-0122":["RUSTSEC-2021-0122"],"CVE-2021-26955":["RUSTSEC-2021-0019"],"CVE-2021-25906":["RUSTSEC-2021-0009"],"RUSTSEC-2020-0124":["RUSTSEC-2020-0124"],"RUSTSEC-2021-0065":["RUSTSEC-2021-0065"],"CVE-2021-38192":["RUSTSEC-2021-0073"],"GHSA-8v9w-p43c-r885":["RUSTSEC-2022-0031"],"CVE-2021-29940":["RUSTSEC-2021-0049"],"RUSTSEC-2021-0006":["RUSTSEC-2021-0006"],"RUSTSEC-2022-0041":["RUSTSEC-2022-0041"],"CVE-2018-20993":["RUSTSEC-2018-0006"],"CVE-2020-35925":["RUSTSEC-2020-0088"],"CVE-2021-28037":["RUSTSEC-2021-0036"],"RUSTSEC-2021-0101":["RUSTSEC-2021-0101"],"CVE-2020-35890":["RUSTSEC-2020-0038"],"CVE-2018-25001":["RUSTSEC-2018-0020"],"CVE-2020-35905":["RUSTSEC-2020-0059"],"CVE-2020-35904":["RUSTSEC-2020-0052"],"RUSTSEC-2020-0162":["RUSTSEC-2020-0162"],"RUSTSEC-2020-0152":["RUSTSEC-2020-0152"],"RUSTSEC-2022-0012":["RUSTSEC-2022-0012"],"CVE-2020-36448":["RUSTSEC-2020-0128"],"RUSTSEC-2021-0032":["RUSTSEC-2021-0032"],"GHSA-v78m-2q7v-fjqp":["RUSTSEC-2022-0030"],"RUSTSEC-2021-0126":["RUSTSEC-2021-0126"],"CVE-2020-36217":["RUSTSEC-2020-0111"],"RUSTSEC-2018-0010":["RUSTSEC-2018-0010"],"RUSTSEC-2020-0026":["RUSTSEC-2020-0026"],"RUSTSEC-2020-0024":["RUSTSEC-2020-0024"],"RUSTSEC-2022-0023":["RUSTSEC-2022-0023"],"CVE-2020-36465":["RUSTSEC-2020-0146"],"CVE-2019-25007":["RUSTSEC-2019-0030"],"CVE-2019-16142":["RUSTSEC-2019-0018"],"CVE-2020-36462":["RUSTSEC-2020-0142"],"CVE-2020-25794":["RUSTSEC-2020-0041"],"CVE-2020-25576":["RUSTSEC-2019-0035"],"RUSTSEC-2021-0123":["RUSTSEC-2021-0123"],"RUSTSEC-2021-0054":["RUSTSEC-2021-0054"],"CVE-2020-35917":["RUSTSEC-2020-0074"],"CVE-2018-20999":["RUSTSEC-2018-0012"],"CVE-2022-35922":["RUSTSEC-2022-0035"],"RUSTSEC-2021-0097":["RUSTSEC-2021-0097"],"RUSTSEC-2021-0069":["RUSTSEC-2021-0069"],"CVE-2020-35906":["RUSTSEC-2020-0060"],"RUSTSEC-2020-0105":["RUSTSEC-2020-0105"],"CVE-2019-12083":["CVE-2019-12083"],"RUSTSEC-2018-0012":["RUSTSEC-2018-0012"],"RUSTSEC-2018-0014":["RUSTSEC-2018-0014"],"RUSTSEC-2022-0043":["RUSTSEC-2022-0043"],"RUSTSEC-2020-0009":["RUSTSEC-2020-0009"],"RUSTSEC-2018-0002":["RUSTSEC-2018-0002"],"RUSTSEC-2022-0032":["RUSTSEC-2022-0032"],"RUSTSEC-2020-0140":["RUSTSEC-2020-0140"],"RUSTSEC-2021-0118":["RUSTSEC-2021-0118"],"CVE-2021-3013":["RUSTSEC-2021-0071"],"CVE-2021-27376":["RUSTSEC-2021-0021"],"RUSTSEC-2016-0005":["RUSTSEC-2016-0005"],"CVE-2021-28032":["RUSTSEC-2021-0031"],"RUSTSEC-2021-0011":["RUSTSEC-2021-0011"],"RUSTSEC-2021-0037":["RUSTSEC-2021-0037"],"RUSTSEC-2020-0087":["RUSTSEC-2020-0087"],"RUSTSEC-2018-0008":["RUSTSEC-2019-0002","RUSTSEC-2018-0008"],"CVE-2022-29185":["RUSTSEC-2022-0018"],"RUSTSEC-2020-0054":["RUSTSEC-2020-0054"],"CVE-2020-36439":["RUSTSEC-2020-0119"],"RUSTSEC-2022-0035":["RUSTSEC-2022-0035"],"RUSTSEC-2021-0056":["RUSTSEC-2021-0056"],"RUSTSEC-2017-0005":["RUSTSEC-2017-0005"],"CVE-2021-29934":["RUSTSEC-2021-0043"],"RUSTSEC-2020-0076":["RUSTSEC-2020-0076"],"CVE-2021-26308":["RUSTSEC-2021-0014"],"RUSTSEC-2020-0062":["RUSTSEC-2020-0062"],"CVE-2020-35912":["RUSTSEC-2020-0070"],"CVE-2021-25902":["RUSTSEC-2021-0005"],"GHSA-4vr9-8cjf-vf9c":["RUSTSEC-2020-0093"],"CVE-2021-25901":["RUSTSEC-2021-0004"],"GHSA-qc36-q22q-cjw3":["RUSTSEC-2021-0069"],"RUSTSEC-2020-0099":["RUSTSEC-2020-0099"],"CVE-2020-35882":["RUSTSEC-2020-0028"],"CVE-2022-0778":["RUSTSEC-2022-0014"],"RUSTSEC-2021-0013":["RUSTSEC-2021-0013"],"CVE-2021-32810":["RUSTSEC-2021-0093"],"RUSTSEC-2021-0023":["RUSTSEC-2021-0023"],"RUSTSEC-2020-0086":["RUSTSEC-2020-0086"],"CVE-2021-28307":["RUSTSEC-2021-0038"],"CVE-2019-25006":["RUSTSEC-2019-0030"],"RUSTSEC-2021-0061":["RUSTSEC-2021-0061"],"RUSTSEC-2021-0113":["RUSTSEC-2021-0113"],"RUSTSEC-2022-0026":["RUSTSEC-2022-0026"],"CVE-2021-26307":["RUSTSEC-2021-0013"],"CVE-2018-20989":["RUSTSEC-2018-0001"],"CVE-2020-35921":["RUSTSEC-2020-0080"],"CVE-2021-26957":["RUSTSEC-2021-0019"],"CVE-2020-35923":["RUSTSEC-2020-0082"],"RUSTSEC-2020-0091":["RUSTSEC-2020-0091"],"CVE-2020-15093":["RUSTSEC-2020-0024"],"CVE-2019-15545":["RUSTSEC-2019-0004"],"RUSTSEC-2021-0051":["RUSTSEC-2021-0051"],"CVE-2020-36450":["RUSTSEC-2020-0130"],"RUSTSEC-2022-0027":["RUSTSEC-2022-0027"],"RUSTSEC-2021-0139":["RUSTSEC-2021-0139"],"RUSTSEC-2020-0053":["RUSTSEC-2020-0053"],"CVE-2020-25016":["RUSTSEC-2020-0029"],"RUSTSEC-2020-0007":["RUSTSEC-2020-0007"],"RUSTSEC-2020-0075":["RUSTSEC-2020-0075"],"RUSTSEC-2018-0011":["RUSTSEC-2018-0011"],"RUSTSEC-2019-0018":["RUSTSEC-2019-0018"],"RUSTSEC-2021-0021":["RUSTSEC-2021-0021"],"RUSTSEC-2019-0026":["RUSTSEC-2019-0026"],"RUSTSEC-2020-0010":["RUSTSEC-2020-0010"],"CVE-2021-23841":["RUSTSEC-2021-0058"],"RUSTSEC-2020-0043":["RUSTSEC-2020-0043"],"CVE-2020-35901":["RUSTSEC-2020-0048"],"RUSTSEC-2022-0045":["RUSTSEC-2022-0045"],"CVE-2020-36441":["RUSTSEC-2020-0121"],"CVE-2021-28031":["RUSTSEC-2021-0030"],"CVE-2020-26297":["RUSTSEC-2021-0001"],"CVE-2021-28877":["CVE-2021-28877"],"CVE-2020-36202":["RUSTSEC-2020-0093"],"CVE-2020-36451":["RUSTSEC-2020-0131"],"RUSTSEC-2020-0079":["RUSTSEC-2020-0079"],"RUSTSEC-2022-0025":["RUSTSEC-2022-0025"],"CVE-2020-35918":["RUSTSEC-2020-0075"],"RUSTSEC-2020-0031":["RUSTSEC-2020-0031"]}
var packages = ["grep-cli","crayon","safe_app","kekbit","tower-http","dotenv_codegen","lazy-init","lock_api","ws","lz4-compress","brotli-sys","static_type_map","cgc","cdr","smallvec","difference","memmap","metrics-util","stack_dst","ncurses","dirs","quickersort","actix-service","cbox","enum-map","chacha20","openssl-src","dync","r2d2_odbc","rocket","fake-static","http","wasmtime","socket2","portaudio","tiny_future","hyper","crossbeam-utils","raw-cpuid","branca","hashconsing","slock","rio","endian_trait","spin","openssl","truetype","sized-chunks","libusb","better-macro","regex","molecule","mio","compu-brotli-sys","alg_ds","serde_yaml","outer_cgi","stderr","safe_vault","array-macro","buffoon","miow","actix-utils","rusttype","thread_local","routing","directories","trust-dns-server","nanorand","parse_duration","arr","arrayfire","cassandra","crossbeam-queue","ftd2xx-embedded-hal","sha2","futures-util","xcb","odbc","mz-avro","libsbc","stdweb","flatbuffers","bronzedb-protocol","string-interner","stream-cipher","pleaser","messagepack-rs","arenavec","fruity","insert_many","aes-soft","gfwx","ordnung","ordered-float","multihash","fil-ocl","cargo","bumpalo","rustc-serialize","bra","safe_bindgen","libflate","generator","futures-intrusive","noise_search","array-tools","chan","arrow2","lru","quic-p2p","rulinalg","libp2p-core","bat","rmpv","mapr","neon","memoffset","claxon","reorder","slice-deque","csv-sniffer","mdbook","linea","model","lmdb","iana-time-zone","ammonia","rkyv","cranelift-codegen","algorithmica","syncpool","marc","alpm-rs","rulex","crossbeam-deque","block-cipher-trait","fltk","async-graphql","rust-crypto","failure","generic-array","ash","arc-swap","vm-memory","blake2","bite","libpulse-binding","unicycle","lexer","ckb","bigint","ruspiro-singleton","tar","image","reffers","simd-json","rgb","through","signal-simple","lz4-sys","abomonation","shamir","binjs_io","im","ticketed_lock","parc","flumedb","chunky","nb-connect","mozjpeg","try-mutex","magnetic","libsecp256k1","linked-hash-map","compact_arena","xml-rs","untrusted","stackvector","tough","temporary","dotenv","abi_stable","oqs","vec-const","aes-ctr","totp-rs","va-ts","array-queue","interledger-packet","uu_od","async-coap","rustsec","stack","internment","multiqueue2","stb_truetype","conqueue","bitvec","lzw","miscreant","dashmap","dces","pyo3","simple-slab","yottadb","futures-task","rusqlite","obstack","rental","v9","multiqueue","protobuf","sass-rs","orion","iced-x86","beef","rusb","tiberius","bunch","glsl-layout","buttplug","quinn","comrak","juniper","ms3d","ozone","rustdoc","rust_sodium","arrow","chrono","double-checked-cell","traitobject","simple_asn1","plutonium","atom","anymap","tokio-proto","actix-codec","security-framework","office","basic_dsp_matrix","markdown","libsecp256k1-rs","convec","jsonrpc-quic","tremor-script","spirv_headers","cell-project","rustdecimal","late-static","rand_core","bam","lever","containers","libp2p-deflate","pancurses","rocksdb","safe-api","tectonic_xdv","acc_reader","eventio","scratchpad","autorand","mozwire","once_cell","streebog","sodiumoxide","tokio","thex","cosmos_sdk","safe_authenticator","crossbeam","gfx-auxil","crust","telemetry","interfaces2","id-map","pkcs11","actix-http","columnar","safe-nd","evm-core","zeroize_derive","atomic-option","nix","os_str_bytes","std","async-h1","chttp","rcu_cell","crossbeam-channel","portaudio-rs","tempdir","prost-types","cache","av-data","git-delta","aesni","tokio-rustls","aovec","toodee","pnet","ansi_term","ark-r1cs-std","windows","disrustor","cargo-download","lettre","lucet-runtime-internals","renderdoc","sys-info","yaml-rust","adtensor","time","asn1_der","trust-dns-proto","qwutils","safe_core","abox","safe-transmute","actix-web","cookie","prost","cpuid-bool","toolshed","rdiff","may_queue","nalgebra","appendix","mopa","term_size","ffi_utils","fake_clock","block-cipher","owning_ref","scottqueue","websocket","nano_arena","postscript","rust-embed","byte_struct","qcell","diesel","derive-com-impl","pty","conquer-once","calamine","net2","rustsec-example-crate","tiny_http","crypto2","max7301","concread","os_socketaddr","term","base64","heapless","serde_cbor"]
