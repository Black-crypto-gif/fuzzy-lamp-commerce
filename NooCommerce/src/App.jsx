import './App.css'
import CardSlider from './components/CardSlider'
import Hero from './components/Hero'
import Collection from './components/store/Collection'
import Products from './components/store/Products'
import Error404Page from './components/Templates/Error404Page'
import Footer from './components/Templates/Footer'
import Navigation from './components/Templates/Navigation'
import SideNavigation from './components/Templates/SideNavigation'

function App() {
/* <div class="_2XBIN _3R4Lk"><div class="_1SYCK"><div class="sc-hEsumM fmrdPM"><div class="sc-cIShpX kqcVlI"><span class="sc-kafWEX gkNRjB"><label data-qa-id="checkbox-offer-desktop" class="sc-iELTvK keJKyP"><div class="sc-cmTdod hyNAmB"><input type="radio" readonly="" checked="" value="offer" name="adType" class="sc-jwKygS euzUWE"><span class="sc-btzYZH bjdxBO"></span></div><span data-qa-id="text-offer-desktop" class="sc-lhVmIH NCnyq">Offres</span></label></span><span class="sc-kafWEX gkNRjB"><label data-qa-id="checkbox-demand-desktop" class="sc-iELTvK keJKyP"><div class="sc-cmTdod hyNAmB"><input type="radio" readonly="" value="demand" name="adType" class="sc-jwKygS euzUWE"><span class="sc-btzYZH bjdxBO"></span></div><span data-qa-id="text-demand-desktop" class="sc-lhVmIH NCnyq">Demandes</span></label></span></div></div></div><div class="_1SYCK"><div class="PW1Kk"><div role="button" aria-label="categories-cta" class="_1F6lq _7p8n5 FPAwQ _3Dgjm _2Pldh _3bsbL _3W949 _2vjeU" data-qa-id="cta-categories-desktop"><div class="_24Hzw"><div class="si3xQ"><svg viewBox="0 0 24 24" display="block" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 cHVNUF"><use xlink:href="#SvgListing"></use></svg></div><span class="_4Cl6k" data-qa-id="text-categories-desktop">Catégories</span><div class="EHZ3b"><svg viewBox="0 0 24 24" display="block" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 cgqyzP"><use xlink:href="#SvgChevrondown"></use></svg></div></div></div></div><div class="_1JWLq"><div class="_3YDIi"><div class=""><div class="ZlsP9 _27ngl _1mwQl aj3_W FB92D"><span class="_1p6Mu"><svg viewBox="0 0 24 24" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtDuGP"><use xlink:href="#SvgSearch"></use></svg></span><input type="text" autocomplete="search-keyword-suggestions" maxlength="500" placeholder="Que recherchez-vous ?" class="" data-qa-id="input-keywords-desktop" value="" style="padding-left: 48px;" spellcheck="false" data-ms-editor="true"></div></div></div></div><div class="_3a68i"><div class="_2wu9v"><div class="_1xgM4"><div><div class="_3Hrjq"><div class="ZlsP9 _27ngl _1mwQl aj3_W FB92D"><span class="_1p6Mu"><svg viewBox="0 0 18 24" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 jtDuGP"><use xlink:href="#SvgMarkeroutline"></use></svg></span><input type="text" autocomplete="search-location-suggestions" placeholder="Saisissez une ville et un rayon" class="" data-qa-id="input-locations-desktop" value="" style="padding-left: 48px;" spellcheck="false" data-ms-editor="true"></div></div></div></div></div></div></div><div class="fV8kz _1WW1S"><div class="_6Do6s" style="position: relative;"><div class="sc-uJMKN fDsSVy"><button data-qa-id="cta-filter_chip_price-desktop" type="button" class="sc-bbmXgH dOyjbL"><span data-qa-id="text-filter_chip_price-desktop" class="sc-jnlKLf dBtpf">Prix</span></button></div><div class="_3ABc7"></div></div></div><div class="_3cE3w"><div><div class="DNREX"><div><div class="_2Ekkv" data-qa-id="switch-shippable-desktop" role="checkbox" aria-checked="false" tabindex="0"><div class="_w5tY">Voir également les annonces disponibles en livraison</div><span class="_3mDgk"><div class="_3A0Bf"><div class="_29LLh"><div class="_2v2le"><svg viewBox="0 0 24 24" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 SDSTC"><use xlink:href="#SvgClose"></use></svg></div></div></div></span></div></div><div data-qa-id="cta-moreInfo-shippable-desktop" class="_2rcPv"><svg viewBox="0 0 24 24" role="img" class="sc-bdVaJa src___StyledBox-sc-fochin-0 glsbVr"><use xlink:href="#SvgAsk"></use></svg><div class="nwl92 _2eLaU"></div></div></div></div><div class="VLXhz"></div></div><div class="_3-Pua"><div class="_1_F8v"><button class="_2qvLx _3WXWV _35pAC _1Vw3w _kC3e _32ILh _2L9kx _30q3D _1y_ge _3QJkO" data-qa-id="cta-search_submit-desktop" type="button">Rechercher (57 397 009 résultats)</button></div></div></div> */

  return (
    <div className="App">
      <Navigation/>
      <SideNavigation />
      <Hero />
      <CardSlider />
      <Collection />
      {/* <Error404Page />
      <Products /> */}
      <Footer />
    </div>
  )
}

export default App
