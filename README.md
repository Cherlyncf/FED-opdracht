# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Cherlyn Fare 

  #### Je startniveau:
  Blauw 

  #### Je focus:
  Responsive 
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://dailypaperclothing.com/

  #### Screenshot(s) van de eerste pagina (small screen): 
  De homepagina
  
  <img src="readme-images/winkels.jpg" width="375px" alt="onze winkels">

  #### Screenshot(s) van de tweede pagina (small screen):
  Onze winkels pagina
  
  <img src="readme-images/home.jpg" width="375px" alt="de homepagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen

  #### Screenreader
  - De screenreader las de tekst snel voor
  - Benoemd eerst de aantal onderdelen die in de lijst staan en leest daarna de lijst items één voor één op
  - Leest eerst de naam van de lijst op, bv: tops en daarna alle linkjes die in de lijst staan 
  - Leest goed elk kopje, tekst element, naam item, prijs en andere elementen op de site voor

  Leest de alt tekst van een afbeelding
  
  <img src="readme-images/alt-tekst-lezen.png" width="375px" alt="voorbeeld van alt tekst lezen">

  #### Muis en Toetsenbord 
  - Je kan niet zonder te klikken op het scherm naar een ander onderdeel gaan, bv: van de navigatie naar de main content

  Je ziet waar je tabt 
  
   <img src="readme-images/tab-zichtbaar.png" width="375px" alt="voorbeeld dat de tab zichtbaar is">

  In de footer zie je niet op het scherm welke link geselecteerd is
  
  <img src="readme-images/footerbevinding.png" width="375px" alt="voorbeeld footer bevinding">

  Oplossing:
  Ook in de footer de tab zichtbaar maken 

  Je kan de lijst in de navigatie niet eerst bekijken, want je opent meteen de link 
  
  <img src="readme-images/link-items.png" width="375px" alt="voorbeeld link items wordt niet geopend">

  Oplossing:
  Als je op één van de navigatie list items komt wordt er aangegeven dat je het kan openen, zodat je de andere list items daarin kan zien.
  
 <img src="readme-images/link-items-open.png" width="375px" alt="voorbeeld link items oplossing">

  #### Motoriek (shocks, elastiekjes)
  Deze test heb ik niet uitgevoerd


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  De gebruiker heeft de site getest met een bril die ervoor zorgt dat hij heel slecht en wazig ziet.

  - Hij ging best snel door te site
  - De teksten mogen in het algemeen donkerder
  - Met moeite kon hij een maat selecteren om de lettertype daar te klein en slecht leesbaar was door de kleur
  - Hij kon de bestelling niet afronden, omdat die pagina veel gebruik maakt van lichte achtergronden in combinatie met een klein lettertype en een lichte tekst kleur

  Sommige teksten kon hij niet lezen door de tekstkleur zelf en achtergronden die gecombineerd waren met bepaalde tekstkleuren.
  
   <img src="readme-images/achtergrond-tekst-slecht-leesbaar.png" width="375px" alt="voorbeeld slecht leesbare tekst door achtergrond">

   <img src="readme-images/knop-slecht-leesbaar.png" width="375px" alt="voorbeeld slecht leesbare knop">
  
  Oplossing:
  De teskten op lichte achtergronden donkerder maken of een andere achtergrondkleur gebruiken

  Sommige teksten hadden een te kleine lettertype waardoor hij het helemaal niet kon lezen.
  
   <img src="readme-images/tekst-te-klein.png" width="375px" alt="voorbeeld slecht leesbare tekst door achtergrond">
  
  Oplossing:
  Een lettertype groote gebruiken die goed leesbaar is
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### De home pagina en product pagina: 
  <img src="readme-images/breakdownschets.jpg" width="375px" alt="breakdown pagina">


</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Dit ging goed:
  - Een andere font in html en CSS zetten
  
  Het maken van de footer
  
  <img src="readme-images/footer.png" width="375px" alt="">
  
   <img src="readme-images/footerstyling.png" width="375px" alt="">

  Styling van de laatste section
  
  <img src="readme-images/stylingginggoed.png" width="375px" alt="">
  
  Dit vindt ik lastig:
  - Ik heb geen idee hoe je een form moet maken met radio buttons (voor de footer)
  - Een dropdown maken
  - Ik heb geen idee hoe je een carousel/ slider moet maken met foto's
  
  Grids gebruiken en positioneren
  
  <img src="readme-images/fotometbutton.png" width="375px" alt="">

  <img src="readme-images/stylingmetcss.png" width="375px" alt="">

  De juiste CSS code gebruiken voor de verschillende stylingen en sections die ik heb gemaakt
  
   <img src="readme-images/section1styling.png" width="375px" alt="">

 
  


  ### Agenda voor meeting
  
  Vragen:
                                                    
  - Hoe moet ik een heading en buttons positioneren op een afbeelding? <br>
  - Hoe moet ik een carrousel/ slider maken met foto’s? <br>
  - Hoe moet ik een dropdown maken? <br>
  - Hoe moet ik een form maken met radio buttons? <br>            

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Background image gebruiken, zodat ik tekst op de afbeelding kan zetten (met viewport)
  - In de footer ook linkjes zetten
  - Classes zetten op de section om makkelijker te stijlen
  - Input type radio gebruiken voor radio button (label om heen)
  - Om een slideshow te maken kan ik overflow gebruiken
  - Em gebruiken inplaats van Px

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Dit ging goed:
  - De content op de website laten mee schalen
  - Grids en overflow gebruiken
 
  Dit vindt ik lastig:
  De footer laten meeschalen als het scherm groter wordt
  
  <img src="readme-images/footer-mee-schalen.png" width="375px" alt="voorbeeld footer bevinding">

  ### Agenda voor meeting
  
  Vragen:
                                                    
  - Hoe kan ik de groote van een background image aanpassen zonder padding te gebruiken? En kan je het ook alleen in een bepaalde section gebruiken? <br>
  - Hoe laat ik de footer mee schalen? <br>
  - Welke code kan ik gebruiken om een image in een button te zetten? <br>

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Buttons veranderen naar linkjes
  - Costum properties gebruiken
  - Br eruit halen en vervangen door de width smaller te maken
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen

  #### Screenreader
  - Benoemd eerst de aantal onderdelen die in de lijst staan en leest daarna de lijst items één voor één op
  - Leest eerst de naam van de lijst op, bv: tops en daarna alle linkjes die in de lijst staan 
  - Leest goed elk kopje, tekst element, naam item, prijs en andere elementen op de site voor
  - Leest de alt tekst van een afbeelding


 


  #### Muis en Toetsenbord 
   - Je kan goed door de site tabben
   
  Als je over een link of button hovert zie je dat
  
  <img src="readme-images/.png" width="375px" alt="voorbeeld hover">

  Je ziet waar je tabt 
  
   <img src="readme-images/.png" width="375px" alt="voorbeeld dat de tab zichtbaar is">

  In de footer zie je nu ook op het scherm welke link geselecteerd is, wat op de originele site niet zo is
  
  <img src="readme-images/.png" width="375px" alt="voorbeeld footer bevinding">

  Je kan de lijst in de hamburger menu eerst bekijken, voordat je direct een link opent
  
  <img src="readme-images/.png" width="375px" alt="voorbeeld link items weergeven in een lijst">


  #### Motoriek (shocks, elastiekjes)
  - Ging snel door de desktop site en ook door de mobiele formaat site zonder enige problemen 


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  
  - Klikte en scrolde snel door de site
  - De tekst kleur en grote zijn goed leesbaar

  Op de originele site waren niet alle teksten goed leesbaar door de lichtgrijze kleur die gebruikt wordt op lichte achtergronden, ik heb ervoor gekozen om alle teksten zwart te maken en de belangrijkste kopjes dik gedrukt
  
   <img src="readme-images/.png" width="375px" alt="voorbeeld tekst goed leesbaar">

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  
  Dit ging goed:
  - Het maken van de tweede pagina ging met gemak
  - Ik begin media query steeds beter te begrijpen
  - Ik haalde mijn CSS door de W3C validator en ik kreeg geen foutmeldingen
  
  Ik haalde mijn pagina’s door de W3C validator en kreeg een paar fout meldingen die ik makkelijk kon oplossen

  <img src="readme-images/warning-melding.png" width="375px" alt="">
  
  
  Dit vindt ik lastig:
  
  - Ik vond het best lastig om de footer responsieve te maken
  - Ik haalde mijn pagina’s door de W3C validator en ik kreeg een melding over dat een button niet in een lijst mag staan
  
  Op de mobiele formaat heb ik een uitklapmenu in de footer, maar als ik het scherm groter maakt moet de uitklapmenu volledig verdwijnen en de content erin moet volledig verspreiden in de footer
  
  <img src="readme-images/footer-details.png" width="375px" alt="">
  
  Ik wil dat de dagen en tijden in het uitklapmenu bij de “opening hours” uit elkaar gaan staan, maar ik weet niet hoe dat moet. Ook wil ik dat de knop in het midden staat, maar dat lukt niet zo goed.
  
   <img src="readme-images/openingstijden.png" width="375px" alt="">
  
  ### Agenda voor meeting
  
  vragen:
  - Mag in een lijst een button zetten (krijg error te zien) ?
  - Ik krijg waarschuwingen over dat mijn sections geen headings hebben, maar moet je een heading voor elke section gebruiken?
  - Hoe kan ik tekst in één p tag uit elkaar laten staan?
  - Is het mogelijk om een details tag te stylen?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Class structuur hetzelfde overal, eerste letter ook een hoofdletter
  - .toonMenu, de punt weghalen in de html
  - Kijken naar heading structuur
  - In de laatste 2 summary’s ook lijsten gebruiken
  - Media query’s onderin plaatsen
  - Hr tag zonder class gebruiken
  - Label gebruiken voor tweede pagina “opening hours”

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Bron van alle foto's: https://dailypaperclothing.com 
  2. Bron zoek icoon: https://cdn-icons-png.flaticon.com/512/54/54481.png
  3. Bron winkelmandje icoon: https://cdn-icons-png.flaticon.com/512/118/118096.png
  4. Bron hamburgermenu icoon: https://www.veryicon.com/download/png/miscellaneous/01-monochrome-linear-icon-library/menu-bar?s=256
  5. Bron sluitknop:https://www.flaticon.com/free-icon/clear-button_60994
  6. Bron terug knop: https://cdn-icons-png.flaticon.com/512/1/1216.png
  7. Bron styling header responsive: https://codepen.io/shooft/pen/GRxXboQ
  8. Bron styling radio button: https://codepen.io/robertspier/pen/LYrmryG

</details>
