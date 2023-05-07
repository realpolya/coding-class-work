console.log('this works')

//size of the desert is measured in miles squared
const deserts = [
    {
        name: "Desert1",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=1iS6BFUnReISgARHlENTEYPeHw86XorJs'
    },
    {
        name: "Desert2",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1dLzd5MBeB-jpc52FHYPnnuQi9CWc031M'
    },
    {
        name: "Desert3",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=1QljuAXmDr_cigiuFlf4JemHLRrBHqOUM'
    },
    {
        name: "Desert4",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=18vYsRxljS3YkGABIIOJY5EqOeLdzLcvP'
    },
    {
        name: "Desert5",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1l1zB57qyjtFQwUXNd__vnp76OTGij-KX'
    },
    {
        name: "Desert6",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1tmAZ_PlwUSBNgvUVFoadsHuh60BD1cvh'
    },
    {
        name: "Desert7",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1kHsNlETjun4Hzzm5LRleOpgYgq0quN5i'
    },
    {
        name: "Desert8",
        location: "DeathValley",
        size: 5270,
        image: 'https://drive.google.com/uc?id=17fVbmCHWEkYgg3ssI25aXVJT0c35_GkC'
    },
    {
        name: "Desert9",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1eHE5xb2F3ZpxjjOJMDL2yG9lgnTzZFMs'
    },
    {
        name: "Desert10",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1Vk2CL-Ay6WK1xXbsNBigee2FWnrJoGZ4'
    },
    {
        name: "Desert11",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1JR09jkXyU7XB0OvyZKkN4UPyHjJ_zu5V'
    },
    {
        name: "Desert12",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1vJy3ze3EwUq-DI5UbgJsdd8jjDeru9Ni'
    },
    {
        name: "Desert13",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=18GSlj9iiuGlPk989eB5vvpn0UkHq4FWA'
    },
    {
        name: "Desert14",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=1a48Fii7q8nKWbSATGUc_0cvxOruXp3Bp'
    },
    {
        name: "Desert15",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1ySUC95_dRuzzOhufAI0qETRDjqor2Z7d'
    },
    {
        name: "Desert16",
        location: "Namib",
        size: 31274,
        image: 'https://drive.google.com/uc?id=1VXl9G0KSlR1auIiu4PGVSE2Ho6SBKptK'
    },
    {
        name: "Desert17",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=18PbTxaKATX7QSbJxB9C8KWJCi2TJi7CU'
    },
    {
        name: "Desert18",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1efXBZOUyve7kgrhQyr5DEbU9obvnyJ5p'
    },
    {
        name: "Desert19",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1704yh3SdsfMTRj99IuNhrIrv_7O0Ji96'
    },
    {
        name: "Desert20",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1FkpuVk_GL-A4n-zOnml4t4Lq5fPRyHcF'
    },
    {
        name: "Desert21",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1aC3Pvbsrr2l5ogui4XkCkVmwy_tCEmM4'
    },
    {
        name: "Desert22",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1lNkGAEbejrouPDuYXwSY5mL5JiTPOzru'
    },
    {
        name: "Desert23",
        location: "CharaSands",
        size: 7,
        image: 'https://drive.google.com/uc?id=1ur-y9ZIn5KtM9-RMSmqJGWDN7mgYu6Ax'
    },
    {
        name: "Desert24",
        location: "GreatKobukSandDunes",
        size: 25,
        image: 'https://drive.google.com/uc?id=11mr3LzE-6l6d84zPBzAJWlxtI_-re9cx'
    },
    {
        name: "Desert25",
        location: "GreatKobukSandDunes",
        size: 25,
        image: 'https://drive.google.com/uc?id=1Y8QfBYehw4Na53Y-0kYVD0djQkL51GZB'
    },
    {
        name: "Desert26",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=11nxbWoNsInADq51bW-mrMOai8xI2r_Mu'
    },
    {
        name: "Desert27",
        location: "Agafay",
        size: 0.5,
        image: 'https://drive.google.com/uc?id=19MDMR_BzZ17lgCMk0u5GpIPSh3V6arYn'
    },
    {
        name: "Desert28",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1r3On0Ef9yO3fbEiYpCisPAwxK5_aJRJ2'
    },
    {
        name: "Desert29",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1L3KpzDMCl_yvhSCCbJSZ8py-ZKQe63BE'
    },
    {
        name: "Desert30",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1bhpqvbrbbVd9q1S1Z61TVLHyZuBw_Pl7'
    },
    {
        name: "Desert31",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1u_0zGPhkSs85Bo7Zn9jNoKtZOb7eFOjx'
    },
    {
        name: "Desert32",
        location: "MonumentValley",
        size: 28.7,
        image: 'https://drive.google.com/uc?id=17EnXlSP3f2JYRTic7uZTjx6xHj0DGjy1'
    },
    {
        name: "Desert33",
        location: "MojaveDesert",
        size: 47877,
        image: 'https://drive.google.com/uc?id=1PwOPVCWp26aw0RMKLnHDluNSYO5sb36s'
    },
    {
        name: "Desert34",
        location: "MojaveDesert",
        size: 47877,
        image: 'https://drive.google.com/uc?id=1hfI8Xbg3INb4cOjObz00QYLJjaSpKTB3'
    },
    {
        name: "Desert35",
        location: "MojaveDesert",
        size: 47877,
        image: 'https://drive.google.com/uc?id=1pAwfhgqVknrE-bkwYhX0KDt3KGz5QeEq'
    },
    {
        name: "Desert36",
        location: "MojaveDesert",
        size: 47877,
        image: 'https://drive.google.com/uc?id=1nb5QZBpesQZjH-4D9colAjpuZziUrfP_'
    },
    {
        name: "Desert37",
        location: "MojaveDesert",
        size: 47877,
        image: 'https://drive.google.com/uc?id=1v5RIErNvdprtJTlTcNX1vwxsf1Z2EPJi'
    },
    {
        name: "Desert38",
        location: "TharDesert",
        size: 96238,
        image: 'https://drive.google.com/uc?id=1urjr1GmJ1WfWubaXtHXSmbWxkwk0hRID'
    },
    {
        name: "Desert39",
        location: "TharDesert",
        size: 96238,
        image: 'https://drive.google.com/uc?id=1Zx8VN9cCLTE7O3gmygbEBWNNMMjypAuF'
    },
    {
        name: "Desert40",
        location: "TharDesert",
        size: 96238,
        image: 'https://drive.google.com/uc?id=1lRa45UHGmayhMr4TuXD7HlPPHRXsJBKL'
    },
    {
        name: "Desert41",
        location: "Patagonia",
        size: 221191,
        image: 'https://drive.google.com/uc?id=1c6nuXeaVeDpWIhKsZrpzhn2_06dB5L3-'
    },
    {
        name: "Desert42",
        location: "Patagonia",
        size: 221191,
        image: 'https://drive.google.com/uc?id=145Dk3bmjfwfOw_-nHpdq7S5ERf2OC2J9'
    },
    {
        name: "Desert43",
        location: "ArabianDesert",
        size: 716400,
        image: 'https://drive.google.com/uc?id=1g9PEPr8QePT7tSl_xlnGJ-TTzfFhGghW'
    },
    {
        name: "Desert44",
        location: "ArabianDesert",
        size: 716400,
        image: 'https://drive.google.com/uc?id=1NR9nfL-1P6kej8u5Na-DtAsALvr8mTqo'
    },
    {
        name: "Desert45",
        location: "ArabianDesert",
        size: 716400,
        image: 'https://drive.google.com/uc?id=1TTecHHrAinvrlfDoYQwzggInL8f3hezd'
    },
    {
        name: "Desert46",
        location: "ArabianDesert",
        size: 716400,
        image: 'https://drive.google.com/uc?id=1WlA7UklzOufNlOoyXjdmt_iwpkEDwAp6'
    },
    {
        name: "Desert47",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1VPPDEf2r9SfbteNRbJGK9u_RhYe_zPYE'
    },
    {
        name: "Desert48",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1VuBaqkHzmgw-3afSznRLiVhCTYROAExz'
    },
    {
        name: "Desert49",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1NqThuKEOWNsvVQVQNPAxjiCp3KEWXQ4C'
    },
    {
        name: "Desert50",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1Mfc-UAentg5c4eodg0KMskYezOvs2bT4'
    },
    {
        name: "Desert51",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1V2WbYh0RmrLyJTAsu5HYzwI-Kdjvr3yA'
    },
    {
        name: "Desert52",
        location: "Gobi",
        size: 500000,
        image: 'https://drive.google.com/uc?id=1HE3UC0XAKqS40CH5F4ujccjM07aq3B07'
    },
    {
        name: "Desert53",
        location: "Sahara",
        size: 3552000,
        image: 'https://drive.google.com/uc?id=1LJ-wCRjY2xym7OI9eAFDY_wbta5w1K11'
    },
    {
        name: "Desert54",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1HwXie1OAvjDwit8bSTkQk4i3qLeWo-xA'
    },
    {
        name: "Desert55",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1m-t6om2-D6llhn3suFzBw41nFtRr182l'
    },
    {
        name: "Desert56",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1KXLzwjHH1oKlghT9oKIcHvtyVhqG40s8'
    },
    {
        name: "Desert57",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1Xlsp6mocHalG3CrgFtl-dCOSfHGSkGW4'
    },
    {
        name: "Desert58",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1LSib_vzEjqkHT-JTa-H4xpZLmRLZmTnd'
    },
    {
        name: "Desert59",
        location: "SonoranDesert",
        size: 86100,
        image: 'https://drive.google.com/uc?id=1FQQrVrQ_Wx9-8RKT494Ej-jqjJQGmvRb'
    },
    {
        name: "Desert60",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1aPeOkco_wWQYmIaY3BxOIDT4S6MU3_dT'
    },
    {
        name: "Desert61",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=16ewZWLKAdOpVgHqhwpOGYzbZXifdE2df'
    },
    {
        name: "Desert62",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1Zjs2EyDe2Poi3n8K0ve-I8GMJRw7wSF8'
    },
    {
        name: "Desert63",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1PeOxeoFkGTxYdWY_BTR5BhOnoQtQ3zTT'
    },
    {
        name: "Desert64",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1BW7gf93qMZoR9sdxtckbhP18-WYESRpW'
    },
    {
        name: "Desert65",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1b_WevTKFv2GtdPFEsQ7yQFKfiASlvq0p'
    },
    {
        name: "Desert66",
        location: "TirariDesert",
        size: 5888,
        image: 'https://drive.google.com/uc?id=1Jt-_ifJb9eQMxhy5PqBp0rmy44ch1sol'
    },
    {
        name: "Desert67",
        location: "TirariDesert",
        size: 5888,
        image: 'https://drive.google.com/uc?id=1jWPVS_1pKGZjayaVxmH__B8_S0bSbgbT'
    },
    {
        name: "Desert68",
        location: "SturtStony",
        size: 145500,
        image: 'https://drive.google.com/uc?id=1-UhIQrDMaMeJdfoDSS0Fw8qlABurEWAs'
    },
    {
        name: "Desert69",
        location: "SturtStony",
        size: 145500,
        image: 'https://drive.google.com/uc?id=1JXSzqvpro-IHGL_6zOhqdZQ6DCD2_TE9'
    },
    {
        name: "Desert70",
        location: "SturtStony",
        size: 145500,
        image: 'https://drive.google.com/uc?id=10NSBDPcQ05mhuLQKxIdGpVmu7D2BWENP'
    },
    {
        name: "Desert71",
        location: "SturtStony",
        size: 145500,
        image: 'https://drive.google.com/uc?id=1flRh1NKKESYYJoI5pQ-ktavsSg63S_q5'
    },
    {
        name: "Desert72",
        location: "TanamiDesert",
        size: 71236,
        image: 'https://drive.google.com/uc?id=16PXpZK0BnV1uVUC6ijjD7Y6E6HLU8OEh'
    },
    {
        name: "Desert73",
        location: "GreatVictoria",
        size: 163115,
        image: 'https://drive.google.com/uc?id=1K4ZVzXWNYnewz2u49XL3ZlJcFttirbJR'
    },
    {
        name: "Desert74",
        location: "SimpsonDesert",
        size: 68100,
        image: 'https://drive.google.com/uc?id=1ymvRX3DaGsLfTqxr6INxyszUBLQ8sigj'
    },
    {
        name: "Desert75",
        location: "Strzelecki",
        size: 30980,
        image: 'https://drive.google.com/uc?id=1cbVKFh-D8tJRcQUtTquusx9PlvmpraSD'
    },
    {
        name: "Desert76",
        location: "Strzelecki",
        size: 30980,
        image: 'https://drive.google.com/uc?id=1v3q8XqK2JvguFrKURyAm0wjGnoN4aFvP'
    },
    {
        name: "Desert77",
        location: "Strzelecki",
        size: 30980,
        image: 'https://drive.google.com/uc?id=1HrhcZzhdB9Clfk8QYYi0VFKLlY5U1NNG'
    },
    {
        name: "Desert78",
        location: "Strzelecki",
        size: 30980,
        image: 'https://drive.google.com/uc?id=1ZMM01odcYLJOtLOx-7nK-mAj-1EevirV'
    },
    {
        name: "Desert79",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1Po1t0wcn9dr1pdFKl3lrMtX1Bc6uNAe_'
    },
    {
        name: "Desert80",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1rghHXa3bRXLcGQX8WEYS4IxPkqhFMa8r'
    },
    {
        name: "Desert81",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1VbRIfvV6u1zuT8XNH5J9spiEZUlBG-yJ'
    },
    {
        name: "Desert82",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1eGbiwy5fx3Z4kj4gOQZ--ZX7fHx05sod'
    },
    {
        name: "Desert83",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1F3rS-2ucthZ1OCHH9mSHBxbpjI3tVGKS'
    },
    {
        name: "Desert84",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=15_bHivSZGAPkB5Bj6C1efrEZjK0VJ_cs'
    },
    {
        name: "Desert85",
        location: "KarakumDesert",
        size: 140000,
        image: 'https://drive.google.com/uc?id=1h9uXiRc-pFbKpsA-MLl_5saMr3OkFf7O'
    },
    {
        name: "Desert86",
        location: "CaboPolonio",
        size: 5,
        image: 'https://drive.google.com/uc?id=1JhOClXthUApjka9AA2oQLewEeZUVmDGt'
    },
    {
        name: "Desert87",
        location: "CaboPolonio",
        size: 5,
        image: 'https://drive.google.com/uc?id=1QtHdqnThyboPWa1nJtGOROHIjl6Vd4Ho'
    },
    {
        name: "Desert88",
        location: "CaboPolonio",
        size: 5,
        image: 'https://drive.google.com/uc?id=1iUu3A8U9dYo5GUEuo5I1HOoHcwhNgz-4'
    },
    {
        name: "Desert89",
        location: "CaboPolonio",
        size: 5,
        image: 'https://drive.google.com/uc?id=1Tl-g5SdkRyLrFP8710rxeXyAJsFWOZ5D'
    },
    {
        name: "Desert90",
        location: "Atacama",
        size: 40441,
        image: 'https://drive.google.com/uc?id=1fF1gwOZ1x7MOUvyG2_nho-0rieluAq_N'
    },
    {
        name: "Desert91",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1hQYTuYIEql2I3TGIPM3eH95QmoBqjg0v'
    },
    {
        name: "Desert92",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=192ED6OXNIyNa5JbKDOIBr2KwdlQFjBPO'
    },
    {
        name: "Desert93",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1IJ03B2WubOneT9w6Ecwn_gb4p4lNmnuK'
    },
    {
        name: "Desert94",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1AYHSgQN11I89bqhtmt2Ub91lwdkpCVBH'
    },
    {
        name: "Desert95",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1hmfK1Tb646Sb42tsWyi0girFbFgLeHa2'
    },
    {
        name: "Desert96",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1kGE9Es9ZnYopf1ddceSB4FXonGAJWI1G'
    },
    {
        name: "Desert97",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=17lSEbvDIguy-pJYMO5eAL7rtmedzuUI7'
    },
    {
        name: "Desert98",
        location: "SalarDeUyuni",
        size: 3900,
        image: 'https://drive.google.com/uc?id=1cYDvhAK4iiplgTRG2LI3HM-Lo7M3N_6J'
    },
    {
        name: "Desert99",
        location: "SechuraDesert",
        size: 1931,
        image: 'https://drive.google.com/uc?id=1e0Qeo1JlKZY8Ycgijw-vlP2JLii6UWVj'
    },
    {
        name: "Desert100",
        location: "SechuraDesert",
        size: 1931,
        image: 'https://drive.google.com/uc?id=10ToTslvWW3tOZZJnYLCuVBJlcKk6WEn8'
    },
    {
        name: "Desert101",
        location: "SechuraDesert",
        size: 1931,
        image: 'https://drive.google.com/uc?id=1pBiv5O8fop0ji_9tIZuDvcjBEYJFUuAZ'
    },
    {
        name: "Desert102",
        location: "SechuraDesert",
        size: 1931,
        image: 'https://drive.google.com/uc?id=1DLRn8WxXGr_nwgA8yKoxPof1TZJdOecy'
    },
    {
        name: "Desert103",
        location: "MonumentValley",
        size: 28.7,
        image: 'https://drive.google.com/uc?id=10lu5RC8T49CkTyv_fk652K5Amhv7Txld'
    },
    {
        name: "Desert104",
        location: "MonumentValley",
        size: 28.7,
        image: 'https://drive.google.com/uc?id=19u-j0qawlyvq5GO1gM5XvacZXlDwJ9Df'
    },
    {
        name: "Desert105",
        location: "CaboPolonio",
        size: 5,
        image: 'https://drive.google.com/uc?id=1fIBPTqkYmEORYGTOSwEdQyy2ilZ-QlVw'
    },
]

// Rendering Images from above to page
const ul = document.querySelector("ul");

function renderDesertToPage(results) {
    //iterating over data set
    for(let i = 0; i < results.length; i++){
        //creating the list item
        let listItem = document.createElement('li');
        //add a class to each item of the results
        listItem.classList.add('card', results[i].location) // 
        //add desert name
        let title = document.createElement('h3')
        title.textContent = results[i].name //
        //add desert location
        let location = document.createElement('p')
        location.classList.add(results[i].location)
        location.textContent = results[i].location

        //add desert image
        let image = document.createElement('img')
        image.setAttribute('src', results[i].image)

        ul.appendChild(listItem)
        listItem.appendChild(title)
        listItem.appendChild(location)
        listItem.appendChild(image)
    }
}

renderDesertToPage(deserts);


// Sorting Method

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function sortingFn(event) {
    if (event.target.classList.contains('filter-btn')) {
        // select the current active button
        let activeBtn1 = filterBtns.querySelector('.active')
        activeBtn1.classList.remove('active')
  
        // apply the active class to the target
        event.target.classList.add('active')

        const filterValue = event.target.getAttribute('data-filter');

        if(filterValue === 'from smaller to larger'){
            deserts.sort(function(a, b){
                if(a.size < b.size){
                    return -1
                }
                if(a.size > b.size){
                    return 1
                }
                return 0
            })
            ul.innerHTML = ""
            renderDesertToPage(deserts)
        } else if (filterValue === 'from larger to smaller'){
            deserts.sort(function(a, b){
                if(a.size > b.size){
                    return -1
                }
                if(a.size < b.size){
                    return 1
                }
                return 0
            })
            ul.innerHTML = ""
            renderDesertToPage(deserts)
        } else if (filterValue === 'original order') {
            deserts.sort(function (c, d){
                if (c.location < d.location) {
                    return -1;
                }
                if (c.location > d.location) {
                    return 1;
                }
                return 0;
            })
            ul.innerHTML = ""
            renderDesertToPage(deserts)
            refreshPage
        }
    }
}
filterBtns.addEventListener("click", sortingFn);

//FILTERING BY LOCATION OF THE DESERT

function refreshPage(){
    window.location.reload();
}

let filterBtns1 = document.querySelector(".filtersdesert");
let cards1 = document.querySelectorAll(".card");
  
  function filterFn(event) {
    console.log(event.target)
    
    if(event.target.classList.contains('filter-btn-desert')){
      // select the current active button
      let activeBtn = filterBtns1.querySelector('.active-desert')
      activeBtn.classList.remove('active-desert')
  
      // apply the active class to the target
      event.target.classList.add('active-desert')
  
      const filterValue1 = event.target.getAttribute('data-filter') // yellow | red
  
      for(let i = 0; i < cards.length; i++){
        if(cards[i].classList.contains(filterValue1) || filterValue1 === 'all'){
          cards[i].classList.remove('hide')
          cards[i].classList.add('show')
        } else {
          cards[i].classList.remove('show')
          cards[i].classList.add('hide')
        }
  
      }
    }
  }
  filterBtns1.addEventListener("click", filterFn);



  //WORKING WITH THE SEARCH BAR

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {
    //1.declare and assign the value of the event's target to a variable
    let value = e.target.value

    //2. check if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        //3. redefine 'value' to exclude white space and change input to all lowercase
        value = value.trim().toLowerCase()
        //4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)

        //returning only the results of setList if the value of the search is included
        setList(deserts.filter(location => {
            return deserts.location.includes(value)
        }))
    } else {
        //5. return nothing
    }
})

// creating foundation for the clear button
const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
    //1. write a function that removes any previous results from the page
})

//showing results on the page
function setList(results){

    for (const deserts of results){
        //adding a class to each item of the results
        listItem.classList.add('result-item')

        const text = document.createTextNode(deserts.location)

        listItem.appendChild(text)

        list.appendChild(listItem)
    }
}