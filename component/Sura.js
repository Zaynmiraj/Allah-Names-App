import React, {useState} from 'react'
import {View , Text, FlatList,Share, Image, TouchableOpacity} from 'react-native'
import style from './style'
import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';


export default function Sura() {
    const[data]=useState(
        [

            {id:"1",name:"Al-Fatihah ", ar:"ٱلْفَاتِحَة",  made:"Makkha", Aya:"7", letter:"142", word:"29"},
            {id:"2",name:"Al-Baqarah", ar:"ٱلْبَقَرَة",  made:"Madina", Aya:"286", letter:"25,500", word:"6,144"},
            {id:"3",name:"Al-Imran", ar:"آلِ عِمْرَان",  made:"Madina", Aya:"200", letter:"14,525", word:"14,525"},
            {id:"4",name:"An-Nisa", ar:"ٱلنِّسَاء",  made:"Madina", Aya:"176", letter:"16,030", word:"3,767"},
            {id:"5",name:"Al-Ma'idah", ar:"ٱلْمَائِدَة",  made:"Madina", Aya:"120", letter:"11,933", word:"2,841"},
            {id:"6",name:"Al-An'am", ar:"ٱلْأَنْعَام",  made:"Makkha", Aya:"165 ", letter:"12,254", word:"3,060"},
            {id:"7",name:"Al-A'raf", ar:"ٱلْأَعْرَاف",  made:"Makkha", Aya:"206", letter:"13,877", word:"3,345"},
            {id:"8",name:"Al-Anfal", ar:"ٱلْأَنْفَال",  made:"Madina", Aya:"75 ", letter:"5,080", word:"1,246"},
            {id:"9",name:"At-Tawbah", ar:"ٱلتَّوْبَة",  made:"Madina", Aya:"129", letter:"10,488", word:"2,505"},
            {id:"10",name:"Yunus", ar:"يُونُس",  made:"Makkha", Aya:"	109", letter:"7,567", word:"1,843"},
            {id:"11",name:"Hud", ar:"هُود",  made:"Makkha", Aya:"123", letter:"7,513", word:"7,513"},
            {id:"12",name:"Yusuf", ar:"يُوسُف",  made:"Makkha", Aya:"111", letter:"7,166", word:"1,799"},
            {id:"13",name:"Ar-Ra'd", ar:"ٱلرَّعْد",  made:"Madina", Aya:"43", letter:"3,506", word:"857"},
            {id:"14",name:"Ibrahim", ar:"إِبْرَاهِيم",  made:"Makkha", Aya:"52", letter:"3,434", word:"834"},
            {id:"15",name:"Al-Hijir", ar:"ٱلْحِجْر",  made:"Makkha", Aya:"99", letter:"2,760", word:"661"},
            {id:"16",name:"An-Nahl", ar:"ٱلنَّحْل",  made:"Makkha", Aya:"128", letter:"7,707", word:"1,848"},
            {id:"17",name:"Al-Isra", ar:"ٱلْإِسْرَاء",  made:"Makkha", Aya:"111", letter:"6,460", word:"1,562"},
            {id:"18",name:"Al-Kahf", ar:"ٱلْكَهْف",  made:"Makkha", Aya:"110", letter:"6,360", word:"1,587"},
            {id:"19",name:"Maryam", ar:"مَرْيَم",  made:"Makkha", Aya:"98", letter:"3,802", word:"975"},
            {id:"20",name:"Taha", ar:"طه",  made:"Makkha", Aya:"135", letter:"5,242", word:"1,357"},
            {id:"21",name:"Al-Anbya", ar:"ٱلْأَنْبِيَاء",  made:"Makkha", Aya:"112", letter:"4,890", word:"1,178"},
            {id:"22",name:"Al-Hajj", ar:"ٱلْحَجّ",  made:"Madina", Aya:"78", letter:"5,070", word:"1,283"},
            {id:"23",name:"Al-Mu'minun", ar:"ٱلْمُؤْمِنُون",  made:"Makkha", Aya:"118", letter:"4,802", word:"1,056"},
            {id:"24",name:"An-Nur", ar:"ٱلنُّور",  made:"Madina", Aya:"64", letter:"5,680", word:"1,323"},
            {id:"25",name:"Al-Furqan", ar:"ٱلْفُرْقَان",  made:"Makkha", Aya:"77", letter:"3,733", word:"900"},
            {id:"26",name:"Al-Shu'ara", ar:"ٱلشُّعَرَاء",  made:"Makkha", Aya:"227", letter:"5,522", word:"1,324"},
            {id:"27",name:"An-Naml", ar:"ٱلنَّمْل",  made:"Makkha", Aya:"93", letter:"4,799", word:"1,163"},
            {id:"28",name:"Al-Qasas", ar:"ٱلْقَصَص",  made:"Makkha", Aya:"88", letter:"5,800", word:"1,442"},
            {id:"29",name:"Al-'Ankabut", ar:"ٱلْعَنْكَبُوت",  made:"Makkha", Aya:"69", letter:"4,195", word:"982"},
            {id:"30",name:"Ar-Rum", ar:"ٱلرُّوم",  made:"Makkha", Aya:"60", letter:"3,534", word:"821"},
            {id:"31",name:"Luqman", ar:"لُقْمَان",  made:"Makkha", Aya:"34", letter:"2,110", word:"554"},
            {id:"32",name:"As-Sajdah", ar:"ٱلسَّجْدَة",  made:"Makkha", Aya:"30", letter:"1,500", word:"376"},
            {id:"33",name:"Al-Ahzab", ar:"ٱلْأَحْزَاب",  made:"Madina", Aya:"73", letter:"5,796", word:"1,307"},
            {id:"34",name:"Saba", ar:"سَبَأ",  made:"Makkha", Aya:"54", letter:"1,512", word:"888"},
            {id:"35",name:"Fatir", ar:"فَاطِر",  made:"Makkha", Aya:"35", letter:"3,130", word:"782"},
            {id:"36",name:"Ya-sin", ar:"يس",  made:"Makkha", Aya:"83", letter:"3,000", word:"734"},
            {id:"37",name:"As-Saffat", ar:"ٱلصَّافَّات",  made:"Makkha", Aya:"182", letter:"3,823", word:"869"},
            {id:"38",name:"Saad", ar:"ص",  made:"Makkha", Aya:"88", letter:"3,029", word:"739"},
            {id:"39",name:"Az-Zumar", ar:"ٱلزُّمَر",  made:"Makkha", Aya:"75", letter:"4,708", word:"1,181"},
            {id:"40",name:"Ghafir", ar:"غَافِر",  made:"Makkha", Aya:"85", letter:"4,960", word:"1,230"},
            {id:"41",name:"Fussilat", ar:"فُصِّلَت",  made:"Makkha", Aya:"54", letter:"3,350", word:"798"},
            {id:"42",name:"Ash-Shuraa", ar:"ٱلشُّورىٰ",  made:"Makkha", Aya:"53", letter:"3,588", word:"864"},
            {id:"43",name:"Az-Zukhruf", ar:"ٱلْزُّخْرُف",  made:"Makkha", Aya:"89", letter:"3,400", word:"840"},
            {id:"44",name:"Ad-Dukhan", ar:"ٱلدُّخَان",  made:"Makkha", Aya:"59", letter:"1,431", word:"350"},
            {id:"45",name:"Al-Jathiyah ", ar:"ٱلْجَاثِيَة",  made:"Makkha", Aya:"37", letter:"2,191", word:"492"},
            {id:"46",name:"Al-Ahqaf", ar:"ٱلْأَحْقَاف",  made:"Makkha", Aya:"35", letter:"2,598", word:"649"},
            {id:"47",name:"Muhammad", ar:"مُحَمَّد",  made:"Madina", Aya:"38", letter:"2,349", word:"546"},
            {id:"48",name:"Al-Fath ", ar:"ٱلْفَتْح",  made:"Madina", Aya:"29", letter:"2,438", word:"564"},
            {id:"49",name:"Al-Hujurat", ar:"ٱلْحُجُرَات",  made:"Madina", Aya:"18", letter:"1,496", word:"357"},
            {id:"50",name:"Qaf", ar:"ق",  made:"Makkha", Aya:"45", letter:"1,494", word:"377"},
            {id:"51",name:"Adh-Dhariyat", ar:"ٱلذَّارِيَات",  made:"Makkha", Aya:"60 ", letter:"1,287", word:"364"},
            {id:"52",name:"At-Tur ", ar:"ٱلطُّور",  made:"Makkha", Aya:"49", letter:"1,500", word:"316"},
            {id:"53",name:"An-Najm", ar:"ٱلنَّجْم",  made:"Makkha", Aya:"62 ", letter:"1,405", word:"364"},
            {id:"54",name:"Al-Qamar", ar:"ٱلْقَمَر",  made:"Makkha", Aya:"55", letter:"1,420", word:"346"},
            {id:"55",name:"Ar-Rahman ", ar:"ٱلرَّحْمَٰن",  made:"Makkha", Aya:"78 ", letter:"1,636", word:"356"},
            {id:"56",name:"Al-Waqi'ah ", ar:"ٱلْوَاقِعَة",  made:"Makkha", Aya:"96", letter:"1,703", word:"383"},
            {id:"57",name:"Al-Hadid", ar:"ٱلْحَدِيد",  made:"Madina", Aya:"29", letter:"2,476", word:"579"},
            {id:"58",name:"Al-Mujadila", ar:"ٱلْمُجَادِلَة",  made:"Madina", Aya:"22", letter:"1,792", word:"479"},
            {id:"59",name:"Al-Hashr", ar:"ٱلْحَشْر",  made:"Madina", Aya:"24 ", letter:"1,913", word:"451"},
            {id:"60",name:"Al-Mumtahanah", ar:"ٱلْمُمْتَحَنَة",  made:"Madina", Aya:"13 ", letter:"1,510", word:"356"},
            {id:"61",name:"As-Saf", ar:"ٱلصَّفّ",  made:"Madina", Aya:"14", letter:"900", word:"230"},
            {id:"62",name:"Al-Jumu'ah", ar:"ٱلْجُمُعَة",  made:"Madina", Aya:"11 ", letter:"720", word:"181"},
            {id:"63",name:"Al-Munafiqun", ar:"ٱلْمُنَافِقُون",  made:"Madina", Aya:"11", letter:"776", word:"185"},
            {id:"64",name:"At-Taghabun", ar:"ٱلتَّغَابُن",  made:"Madina", Aya:"18 ", letter:"1,070", word:"246"},
            {id:"65",name:"At-Talaq", ar:"ٱلطَّلَاق",  made:"Madina", Aya:"12", letter:"1,060", word:"293"},
            {id:"66",name:"At-Tahrim", ar:"ٱلتَّحْرِيم",  made:"Madina", Aya:"12", letter:"1,160", word:"258"},
            {id:"67",name:"Al-Mulk", ar:"ٱلْمُلْك",  made:"Makkha", Aya:"30", letter:"1,300", word:"337"},
            {id:"68",name:"Al-Qalam", ar:"ٱلْقَلَم",  made:"Makkha", Aya:"52 ", letter:"1,256", word:"305"},
            {id:"69",name:"Al-Haqqah", ar:"ٱلْحَاقَّة",  made:"Makkha", Aya:"52", letter:"1,084", word:"264"},
            {id:"70",name:"Al-Ma'arij", ar:"ٱلْمَعَارِج",  made:"Makkha", Aya:"44", letter:"1,061", word:"221"},
            {id:"71",name:"Nuh", ar:"نُوح",  made:"Makkha", Aya:"28", letter:"929", word:"231"},
            {id:"72",name:"Al-Jinn", ar:"ٱلْجِنّ",  made:"Makkha", Aya:"28", letter:"870", word:"290"},
            {id:"73",name:"Al-Muzzammil", ar:"ٱلْمُزَّمِّل",  made:"Makkha", Aya:"20", letter:"838", word:"204"},
            {id:"74",name:"Al-Muddaththir", ar:"ٱلْمُدَّثِّر",  made:"Makkha", Aya:"56", letter:"1,010", word:"260"},
            {id:"75",name:"Al-Qiyamah", ar:"ٱلْقِيَامَة",  made:"Makkha", Aya:"40", letter:"652", word:"168"},
            {id:"76",name:"Al-Insan", ar:"ٱلْإِنْسَان",  made:"Madina", Aya:"	31", letter:"1,054", word:"247"},
            {id:"77",name:"Al-Mursalat", ar:"ٱلْمُرْسَلَات",  made:"Makkha", Aya:"50 ", letter:"816", word:"185"},
            {id:"78",name:"An-Naba", ar:"ٱلنَّبَأ",  made:"Makkha", Aya:"40", letter:"770", word:"178"},
            {id:"79",name:"An-Nazi'at", ar:"ٱلنَّازِعَات",  made:"Makkha", Aya:"46", letter:"753", word:"183"},
            {id:"80",name:"'Abasa ", ar:"عَبَسَ",  made:"Makkha", Aya:"42", letter:"533", word:"137"},
            {id:"81",name:"At-Takwir", ar:"ٱلتَّكْوِير",  made:"Makkha", Aya:"29", letter:"533", word:"108"},
            {id:"82",name:"Al-Infitar", ar:"ٱلْإِنْفِطَار",  made:"Makkha", Aya:"19", letter:"327", word:"85"},
            {id:"83",name:"Al-Mutaffifin", ar:"ٱلْمُطَفِّفِين",  made:"Makkha", Aya:"36", letter:"830", word:"173"},
            {id:"84",name:"Al-Inshiqaq", ar:"ٱلْإِنْشِقَاق",  made:"Makkha", Aya:"25", letter:"430", word:"112"},
            {id:"85",name:"Al-Buruj", ar:"ٱلْبُرُوج",  made:"Makkha", Aya:"22", letter:"458", word:"113"},
            {id:"86",name:"At-Tariq", ar:"ٱلطَّارِق",  made:"Makkha", Aya:"17 ", letter:"245", word:"65"},
            {id:"87",name:"Al-A'la", ar:"ٱلْأَعْلَىٰ",  made:"Makkha", Aya:"19", letter:"270", word:"76"},
            {id:"88",name:"Al-Ghashiyah", ar:"ٱلْغَاشِيَة",  made:"Makkha", Aya:"26", letter:"330", word:"96"},
            {id:"89",name:"Al-Fajr", ar:"ٱلْفَجْر",  made:"Makkha", Aya:"30", letter:"577", word:"143"},
            {id:"90",name:"Al-Balad ", ar:"ٱلْبَلَد",  made:"Makkha", Aya:"20", letter:"330", word:"86"},
            {id:"91",name:"Ash-Shams", ar:"ٱلشَّمْس",  made:"Makkha", Aya:"15", letter:"247", word:"58"},
            {id:"92",name:"Al-Layl", ar:"ٱللَّيْل",  made:"Makkha", Aya:"21", letter:"302", word:"75"},
            {id:"93",name:"Ad-Duhaa", ar:"ٱلضُّحَىٰ",  made:"Makkha", Aya:"11", letter:"192", word:"44"},
            {id:"94",name:"Ash-Sharh", ar:"ٱلشَّرْح",  made:"Makkha", Aya:"8", letter:"103", word:"31"},
            {id:"95",name:"At-Tin ", ar:"ٱلتِّين",  made:"Makkha", Aya:"8", letter:"150", word:"38"},
            {id:"96",name:"Al-'Alaq", ar:"ٱلْعَلَق",  made:"Makkha", Aya:"19", letter:"280", word:"76"},
            {id:"97",name:"Al-Qadr", ar:"ٱلْقَدْر",  made:"Makkha", Aya:"5", letter:"112", word:"34"},
            {id:"98",name:"Al-Bayyinah", ar:"ٱلْبَيِّنَة",  made:"Madina", Aya:"8 ", letter:"392", word:"98"},
            {id:"99",name:"Az-Zalzalah", ar:"ٱلزَّلْزَلَة",  made:"Madina", Aya:"8", letter:"149", word:"40"},
            {id:"100",name:"Al-'Adiyat", ar:"ٱلْعَادِيَات",  made:"Makkha", Aya:"11", letter:"163", word:"44"},
            {id:"101",name:"Al-Qari'ah", ar:"ٱلْقَارِعَة",  made:"Makkha", Aya:"11", letter:"150", word:"40"},
            {id:"102",name:"At-Takathur", ar:"ٱلتَّكَاثُر",  made:"Makkha", Aya:"8", letter:"120", word:"32"},
            {id:"103",name:"Al-'Asr", ar:"ٱلْعَصْر",  made:"Makkha", Aya:"3", letter:"68", word:"18"},
            {id:"104",name:"Al-Humazah", ar:"ٱلْهُمَزَة",  made:"Makkha", Aya:"9", letter:"130", word:"37"},
            {id:"105",name:"Al-Fil ", ar:"ٱلْفِيل",  made:"Makkha", Aya:"5", letter:"96", word:"27"},
            {id:"106",name:"Quraysh", ar:"قُرَيْش",  made:"Makkha", Aya:"4", letter:"93", word:"21"},
            {id:"107",name:"Al-Ma'un", ar:"ٱلْمَاعُون",  made:"Makkha", Aya:"7", letter:"125", word:"29"},
            {id:"108",name:"Al-Kawsar ", ar:"ٱلْكَوْثَر",  made:"Makkha", Aya:"3", letter:"42", word:"14"},
            {id:"109",name:"Al-Kafirun", ar:"ٱلْكَافِرُون",  made:"Makkha", Aya:"6", letter:"94", word:"31"},
            {id:"110",name:"An-Nasr", ar:"ٱلنَّصْر",  made:"Madina", Aya:"3", letter:"77", word:"23"},
            {id:"111",name:"Al-Masad", ar:"ٱلْمَسَد",  made:"Makkha", Aya:"5", letter:"77	", word:"27"},
            {id:"112",name:"Al-Ikhlas", ar:"ٱلْإِخْلَاص",  made:"Makkha", Aya:"4", letter:"47", word:"19"},
            {id:"113",name:"Al-Falaq", ar:"ٱلْفَلَق",  made:"Makkha", Aya:"5", letter:"74	", word:"27"},
            {id:"114",name:"An-Nas", ar:"ٱلنَّاس",  made:"Makkha", Aya:"6", letter:"79", word:"79"},
        
        ]
    )

    const[speak, setSpeak] = useState(false)
    return (
        <View> 
      <FlatList 
      data={data} 
      renderItem={({item})=> 
      
      <TouchableOpacity onPress={() =>{
          Clipboard.setString(item.arab +" "+ item.latin)
          Snackbar.show({
              text: 'Copied Succesfully',
              duration: Snackbar.LENGTH_SHORT,
              action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => { /* Do something. */ },
              },
            });
      }}>
          <View style={style.box}>
          <Text style={style.name}> {item.name} </Text>
          <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}> 
          <View style={{width:'65%'}}>
                <Text> Number of verses : {item.Aya} </Text>
                <Text> Number of letter : {item.letter} </Text>
                <Text> Number of word : {item.word} </Text>
                <Text> Place of Revelation : {item.made} </Text>
          </View>
          <View style={{display:'flex', flexDirection:'row'}}> 
              <TouchableOpacity onPress={() => {
                  Tts.stop();
                  Tts.speak(item.name +'Number of verses'+ item.Aya +"number of latter"+item.letter +"number of word"+ item.word +"Place of Revelation" + item.made, {
                      androidParams: {
                        KEY_PARAM_PAN: -1,
                        KEY_PARAM_VOLUME: 1,
                        KEY_PARAM_STREAM: 'STREAM_MUSIC',
                      },
                    });
                    Tts.setDefaultLanguage('en-US');
                    Tts.setDefaultRate(0.3);
                    
                    Tts.addEventListener('tts-start',(event) => setSpeak(true));
                    Tts.addEventListener('tts-finish',(event) => setSpeak(false));
              }} style={{width:20, height:20}}><Image style={{width:25,height:25}} source={require('./photo/mic.png')}   /></TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  const result = Share.share({
                      message:item.name +", "+'Number of verses : '+" "+ item.Aya +", "+"number of latter : "+" "+item.letter +", "+"number of word : "+" "+ item.word +", "+"Place of Revelation" +" "+ item.made,
                  })
                  if(result=== Share.sharedAction){

                  }
                  else if(result === Share.dismissedAction){

                  }else{

                  }

              }} style={{width:20, height:20, marginHorizontal:20}}><Image style={{width:25,height:25}} source={require('./photo/send.png')}   /></TouchableOpacity>
          </View>
          </View>
          
       </View> 
      </TouchableOpacity>  
          
          }

          keyExtractor={item => item.id} 
/>
  </View>
    )
}

