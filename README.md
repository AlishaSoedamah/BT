# BT
## week 1
### dag 1
#### 16.02.2026
<b>Wat heb ik vandaag gedaan?</b>
Basis html opgezet, ingelezen over de opdracht.
checkout met Patoune

<b>Hoeveel tijd heeft me dat gekost?</b>
6 uur + alle uitleg van Vasilis

<b>Wat heb ik geleerd?</b>
Nog niet zo veel

<b>Wat ga ik morgen doen?</b>
Naar de les!

### dag 2
#### 17.02.2026
#### Workshop Vasilis
Belangrijkste dingen/punten uit de presentatie:
- POST/GET method attribute 
- GET antwoorden komen in de URL 
- ```<fieldset>``` = data die gegroepeerd is in een form. 
- Een ```<fieldset>``` moet altijd een ```legend``` hebben.
- Een label is interactief, een label is altijd gekoppeld aan een input

##### :invalid en :valid vs :user-invalid en :user-valid 
user-valid/invalid laten pas de styling zien nadat de gebruiker weg gaat van het input veld ,
met invalid/valid zie je de styling voordat je iets in de input zet

<b>Wat heb ik vandaag gedaan?</b>
Ochtend quiz gevolgd over Tahoe icons (weekly geek) en de workshop van Vasilis gedaan.

<b>Hoeveel tijd heeft me dat gekost?</b>
2 uur

<b>Wat heb ik geleerd?</b>
input validation in css

<b>Wat ga ik morgen doen?</b>
het ander vak

## week 1 voortgang
<details>
<summary>Voortgang 19.02.2026</summary>

Ik ben nu nog bezig met data organiseren en groeperen op de pagina zodat het een logishe flow heeft. Ik wil dat je in een paar stappen door het formulier heen kan navigeren zonder dat het irritant wordt. 

Dingen die we hebben besproken:
- autocomplete attribute
- de css :has selector kan velden ook makkelijk verbergen ipv javascript te gebruiken
- input validation pattern="[0-9]{6}" voor wat je wel en niet in de input wilt hebben
- ```border: none; border-top: 3em solid white;``` voor de styling van legend zodat ie niet door de border heen staat
- Kijk meer naar input[type='radio'] input[type='text'] voor styling zodat je geen extra classes hoeft te gebruiken

We gaan kijken naar input validation en patterns na de vakantie [disabled](https://www.wufoo.com/html5/disabled-attribute/#:~:text=The%20disabled%20attribute%20makes%20the,descendent%20form%20controls%20are%20disabled)


</details>

## week 2

### dag 3
#### 02.03.2026

<b>Wat heb ik vandaag gedaan?</b>
Herstructurering van de HTML op de site en beter nagedacht over de UX van de website

<b>Hoeveel tijd heeft me dat gekost?</b>
2 uur? 3 uur?

<b>Wat heb ik geleerd?</b>
Dat je een fieldset meerdere fieldsets kunt zetten zolang er een legend in zit.

<b>Wat ga ik morgen doen?</b>
- Aan dit vak zitten 
- Meer aan de styling zitten van de website
- De workshop van Vasilis doen
- De weekly geek doen in de ochtend

### dag 4
#### 03.03.2026
Voor de Weekly Geek van vandaag moesten we de UX van HTML elementen onderzoeken en om een element na te maken met divs en spans.
Mijn element was de ```<a>``` tag, dit is de code:

```
	<span onclick="window.location='https://google.com'">mine</span>
	<a href="https://google.com">real</a>

	span {
		color: blue;
		 text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
		&:visited {
		color:  rgb(51, 0, 255);
		text-decoration-color: rgb(51, 0, 255);
		}
	}
	:active {
		color: red;
	}
```
Het probleem met dit en de echte ```<a>``` tag is dat de Anchor wel door screenreaders wordt gelezen en de span genegeerd wordt als je door de pagina heen gaat.

[:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:visited)
[window.location](https://stackoverflow.com/questions/24062334/onclick-window-location-trying-to-change-to-open-link-in-new-tab)
[:active](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:active)

## week 2 voortgang
<details>
<summary>Voortgang 06.03.2026</summary>
</details>

## week 3

### dag 5
#### 09.03.2026
In een fieldset kunnen meerdere fieldsets met legends zitten, dit is nice

### dag 6
#### 10.03.2026

## week 3 voortgang
<details>
<summary>Voortgang 13.03.2026</summary>
</details>

## week 4

### dag 7
#### 16.03.2026

### dag 8
#### 17.03.2026


## bronnen
[:user-valid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:user-valid)
[:user-invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:user-invalid)