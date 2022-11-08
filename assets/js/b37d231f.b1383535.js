"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,description:"Learn how to configure or remove ads in your application."},i="Ads Setup or Removal",l={unversionedId:"project_configuration/ads",id:"project_configuration/ads",title:"Ads Setup or Removal",description:"Learn how to configure or remove ads in your application.",source:"@site/docs/project_configuration/ads.md",sourceDirName:"project_configuration",slug:"/project_configuration/ads",permalink:"/news_toolkit/project_configuration/ads",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/ads.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to configure or remove ads in your application."},sidebar:"tutorialSidebar",previous:{title:"Authentication Setup",permalink:"/news_toolkit/project_configuration/social_authentication"},next:{title:"Notifications Setup",permalink:"/news_toolkit/project_configuration/notifications"}},s={},p=[{value:"Configure Ads",id:"configure-ads",level:2},{value:"Google Ad Manager",id:"google-ad-manager",level:3},{value:"Create Apps",id:"create-apps",level:4},{value:"Firebase Configuraton",id:"firebase-configuraton",level:4},{value:"Google AdMob",id:"google-admob",level:3},{value:"Create Apps",id:"create-apps-1",level:4},{value:"Firebase Configuraton",id:"firebase-configuraton-1",level:4},{value:"Swap Ad IDs",id:"swap-ad-ids",level:3},{value:"Remove Ads",id:"remove-ads",level:2},{value:"Removing Banner Ads",id:"removing-banner-ads",level:3},{value:"Removing Interstitial Ads",id:"removing-interstitial-ads",level:3},{value:"Removing Sticky Ads",id:"removing-sticky-ads",level:3},{value:"Removing Rewarded Ads",id:"removing-rewarded-ads",level:3},{value:"Removing Advertisement Dependencies",id:"removing-advertisement-dependencies",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ads-setup-or-removal"},"Ads Setup or Removal"),(0,r.kt)("p",null,"The Flutter News Toolkit is pre-configured to work with Google Ad Manager or AdMob. Follow the configuration steps below if you would like to monetize your app with either of these services."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you do not want to monetize your app with Google Ad Manager or AdMob, follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"#remove-ads"},"Remove Ads")," section below.")),(0,r.kt)("h2",{id:"configure-ads"},"Configure Ads"),(0,r.kt)("h3",{id:"google-ad-manager"},"Google Ad Manager"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admanager.google.com"},"Google Ad Manager")," offers publishers a complete ad revenue engine, helping publishers streamline operations and capture the most value for every impression. To leverage this ad exchange platform in your apps, visit ",(0,r.kt)("a",{parentName:"p",href:"https://admanager.google.com"},"Google Ad Manager")," and enter your Google Account username and password to sign in. If you do not have an account, sign up for an Ad Manager account to ",(0,r.kt)("a",{parentName:"p",href:"https://admanager.google.com/home/contact-us/"},"get started"),"."),(0,r.kt)("h4",{id:"create-apps"},"Create Apps"),(0,r.kt)("p",null,"After successfully creating an account or logging into an existing account, create apps for each platform and flavor. By default, you'll need an app for Android development and production flavors and iOS development and production flavors (4 apps total). If you chose to create additional flavors when generating your project with mason, please be sure to create additional apps in your Google Ad Manager."),(0,r.kt)("h4",{id:"firebase-configuraton"},"Firebase Configuraton"),(0,r.kt)("p",null,"After generating your apps, return to your Firebase Console to link the Google Ad Manager apps to their respective Firebase apps. This is done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Engage --\x3e AdMob")," section of your Firebase project."),(0,r.kt)("h3",{id:"google-admob"},"Google AdMob"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://admob.google.com/home/"},"Google AdMob")," makes earning revenue easy with in-app ads, actionable insights, and powerful, easy-to-use tools that grow your app business. To leverage this service in your apps, visit Google AdMob to log in or create and account to ",(0,r.kt)("a",{parentName:"p",href:"https://apps.admob.com/signup/?_ga=2.23772223.461135622.1667403019-1758917868.1667403019&_gl=1*akwl9n*_ga*MTc1ODkxNzg2OC4xNjY3NDAzMDE5*_ga_6R1K8XRD9P*MTY2NzQwMzAxOC4xLjAuMTY2NzQwMzEzOS4wLjAuMA.."},"get started"),"."),(0,r.kt)("h4",{id:"create-apps-1"},"Create Apps"),(0,r.kt)("p",null,"After successfully creating an account or logging into an existing account, create apps for each platform and flavor. By default, you'll need an app for Android development and production flavors and iOS development and production flavors (4 apps total). If you chose to create additional flavors when generating your project with mason, please be sure to create additional apps in your Google AdMob account."),(0,r.kt)("h4",{id:"firebase-configuraton-1"},"Firebase Configuraton"),(0,r.kt)("p",null,"After generating your apps, return to your Firebase Console to link the Google AdMob apps to their respective Firebase apps. This is done in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Engage --\x3e AdMob")," section of your Firebase project."),(0,r.kt)("h3",{id:"swap-ad-ids"},"Swap Ad IDs"),(0,r.kt)("p",null,"Finally, you need to specify your app IDs regardless of whether you are using Google AdMob or Google Ad Manager."),(0,r.kt)("p",null,"First find your ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/admanager/answer/1656921#copy-id"},"Google Ad Manager app IDs")," or ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7356431?hl=en"},"AdMob app IDs"),". For every app flavor's ",(0,r.kt)("inlineCode",{parentName:"p"},"strings.xml")," file within your codebase, replace the placeholder value associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"admob_app_id")," key with your flavor-specific app ID. Repeat this procedure and replace the placeholder value for every ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMOB_APP_ID")," key within your ",(0,r.kt)("inlineCode",{parentName:"p"},"project.pbxproj")," file."),(0,r.kt)("h2",{id:"remove-ads"},"Remove Ads"),(0,r.kt)("p",null,"You may want to remove advertisements from your app. This section discusses how to remove the various advertisement types and their dependencies."),(0,r.kt)("h3",{id:"removing-banner-ads"},"Removing Banner Ads"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"static_news_data.dart")," file which your app displays contains banner ads by default. As you ",(0,r.kt)("a",{parentName:"p",href:"server_development/connecting_your_data_source"},"implement your data source"),", do not insert ",(0,r.kt)("inlineCode",{parentName:"p"},"AdBlocks")," into the data returned from your data source. This will ensure that your app will not display ",(0,r.kt)("inlineCode",{parentName:"p"},"BannerAds"),"."),(0,r.kt)("h3",{id:"removing-interstitial-ads"},"Removing Interstitial Ads"),(0,r.kt)("p",null,"By default, interstitial ads are displayed upon article entry by ",(0,r.kt)("inlineCode",{parentName:"p"},"_ArticleViewState"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"initState")," method in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/view/article_page.dart"),". To remove interstitial ads entirely, you can delete"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"context.read<FullScreenAdsBloc>().add(const ShowInterstitialAdRequested());\n")),(0,r.kt)("h3",{id:"removing-sticky-ads"},"Removing Sticky Ads"),(0,r.kt)("p",null,"In the template, there is a sticky ad placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"ArticleContent")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/widgets/article_content.dart"),". In order to remove it, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"StickyAd()")," constructor call from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ArticleContent")," widget's ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.children"),"."),(0,r.kt)("h3",{id:"removing-rewarded-ads"},"Removing Rewarded Ads"),(0,r.kt)("p",null,"Rewarded ads are built inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscribeWithArticleLimitModal")," widget in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/subscriptions/widgets/subscribe_with_article_limit_modal.dart")," file."),(0,r.kt)("p",null,"Remove the show rewarded ad button block within the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscribeWithArticleLimitModal")," widget to remove the rewarded ad option for premium articles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Padding(\n    padding: const EdgeInsets.symmetric(\n        horizontal: AppSpacing.lg + AppSpacing.xxs,\n    ),\n    child: AppButton.transparentWhite(\n        key: const Key(\n            'subscribeWithArticleLimitModal_watchVideoButton',\n        ),\n        onPressed: () => context\n            .read<FullScreenAdsBloc>()\n            .add(const ShowRewardedAdRequested()),\n        child: Row(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n                Assets.icons.video.svg(),\n                const SizedBox(width: AppSpacing.sm),\n                Text(watchVideoButtonTitle),\n            ],\n        ),\n    ),\n),\n")),(0,r.kt)("h3",{id:"removing-advertisement-dependencies"},"Removing Advertisement Dependencies"),(0,r.kt)("p",null,"If you are removing advertisements from your app, it's a good idea to remove all advertisement-related dependencies from your codebase."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ad Source Code")),(0,r.kt)("p",null,"Remove the following directories and files entirely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/lib/ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/test/ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/ads_consent_client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/lib/src/widgets/banner_ad_content.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/test/src/widgets/banner_ad_content_test.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/lib/src/banner_ad.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/test/src/banner_ad_test.dart"))),(0,r.kt)("p",null,"Remove the noted snippets from the files below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/app/view/app.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"required AdsConsentClient adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_adsConsentClient = adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final AdsConsentClient _adsConsentClient;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"RepositoryProvider.value(value: _adsConsentClient),\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"BlocProvider(\n  create: (context) => FullScreenAdsBloc(\n    interstitialAdLoader: ads.InterstitialAd.load,\n    rewardedAdLoader: ads.RewardedAd.load,\n    adsRetryPolicy: const AdsRetryPolicy(),\n    localPlatform: const LocalPlatform(),\n  )\n    ..add(const LoadInterstitialAdRequested())\n    ..add(const LoadRewardedAdRequested()),\n  lazy: false,\n),\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/view/article_page.dart")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HasWatchedRewardedAdListener")," class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HasWatchedRewardedAdListener")," widget (retain the child ",(0,r.kt)("inlineCode",{parentName:"li"},"Scaffold")," widget)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/main/main_development.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final adsConsentClient = AdsConsentClient();\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: adsConsentClient,\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/main/main_production.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final adsConsentClient = AdsConsentClient();\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: adsConsentClient,\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/onboarding/bloc/onboarding_bloc.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"required AdsConsentClient adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_adsConsentClient = adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"on<EnableAdTrackingRequested>(\n  _onEnableAdTrackingRequested,\n  transformer: droppable(),\n);\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final AdsConsentClient _adsConsentClient;\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"_onEnableAdTrackingRequested()")," function"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/onboarding/view/onboarding_page.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: context.read<AdsConsentClient>(),\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/widgets/article_content_item.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"else if (newsBlock is BannerAdBlock) {\n  return BannerAd(\n    block: newsBlock,\n    adFailedToLoadTitle: context.l10n.adLoadFailure,\n  );\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/widgets/article_content_item.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"else if (newsBlock is BannerAdBlock) {\n  return BannerAd(\n    block: newsBlock,\n    adFailedToLoadTitle: context.l10n.adLoadFailure,\n  );\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/lib/news_blocks_ui.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"export 'src/banner_ad.dart' show BannerAd;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/lib/src/widgets/widges.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"export 'banner_ad_content.dart';\n")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pubspec Ad Depenedencies")),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"google_mobile_ads")," dependency from the ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/pubspec.yaml")," file, as well as all corresponding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import  'package:google_mobile_ads/google_mobile_ads.dart'\n")),(0,r.kt)("p",null,"statements."),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_consent_client")," dependency from ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/pubspec.yaml"),", as well as all ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_consent_client")," and all ",(0,r.kt)("inlineCode",{parentName:"p"},"ads")," import statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:ads_consent_client/ads_consent_client.dart';\nimport 'package:flutter_news_template/ads/ads.dart';\n")))}c.isMDXComponent=!0}}]);