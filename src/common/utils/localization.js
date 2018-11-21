import React, { PropTypes } from 'react'
import { Link } from "react-router-dom"
import { pagesUrls } from "../navigation/navigationConstants"

const localisation = {
  'EN-GB': {
    overview_title: <span>TheoryMine lets you name a personalised, newly discovered, mathematical theorems as a novelty
      gift.</span>,
    overview_tagline: <span>Name your very own mathematical theorem, newly discovered by one of the world's most advanced
      computerised theorem provers (a kind of robot mathematician), and you can immortalise your loved ones, teachers,
      friends and even yourself and your favourite pets.</span>,
    overview_see_example: <span>See an example theorem certificate</span>,
    overview_you: <span>YOU</span>,
    overview_we: <span>WE</span>,
    overview_they: <span>THEY</span>,
    overview_you2: <span>choose a name</span>,
    overview_we2: <span>discover a theorem</span>,
    overview_they2: <span>get a great gift</span>,
    overview_get_started: <span>Get Started:</span>,
    overview_choose: <span>Choose your Theorem Name</span>,
    overview_preview: <span>Preview your theorem!</span>,
    overview_eg: <span>e.g. Tom's theorem, or The Bucklesham lemma</span>,

    //page_discover

    discover_title: 'Name a new theorem',
    discover_15: <span>Only &pound;15.00</span>,
    discover_imagetag: <span>*This is just an illustration, it is not the certificate that you will receive.</span>,
    discover_part1: 'By placing an order with TheoryMine, you name a newly discovered mathematical theorem. This lets you immortalise your loved ones, teachers, friends and even yourself and your favourite pets! It may take upto 6 working days (excluding weekends) for our robot mathematicians to discover your theorem. We do NOT send printed copies. Once discovered we will send you a notification by email that your theorem is ready with links to let you download a certificate of the discovery.',
    discover_see_ex: <span>See an example certificate</span>,
    discover_part2: <span>To buy our gift items you first need topurchase a theorem. Once you receive this you will be able
      to follow the &quot;Gift Items Shop&quot;  link next to your theorem name on your profile page</span>,

    discover_part3: <span>N.B.: If you would like your theorem to be sent to a specific email address, please make sure you
      are registered and logged in with this email address. Otherwise TheoryMine will use your PayPal email
      address.</span>,
    discover_part4: <span>You can place an order by sending us a payment of 15 UK pounds using Paypal. Please indicate the
      theorem name in "special instructions to seller section, and we will send you a newly discovered theorem within 7
      business days.</span>,
    discover_choose: <span>Choose your Theorem Name:</span>,
    discover_eg: <span>e.g. Tom's theorem, or The Bucklesham lemma</span>,
    discover_tc1: <span>I have read and accept the</span>,
    discover_tc2: <span>Terms and Conditions of the TheoryMine website</span>,
    discover_sub1: <span>Once your order has been placed, you will receive a user name and password to</span>,
    discover_sub2: <span>to this website. You can login at any time to view the status of your order, view the theorems you
      have named, as well as download the certificate for these theorems.</span>,
    discover_sub3: <span>Theorems are discovered by our robot mathematicians, we make every effort to ensure that the
      discovered theorems have never been published before, and we guarantee that every theorem we discover has not been
      previously recorded in our database of theorems. In the unlikely event that that there is a mathematics article
      publishing the theorem prior to our discovery, then we will give two additional new theorems to the owner of the
      old theorem. For more information on how we ensure that our discovered mathematics is new, see the</span>,
    discover_choose2: <span>Choose the language for your brochure and emails:</span>,

    discover_voucher: <span>Got a voucher?</span>,
    discover_confirm: <span>confirm</span>,
    discover_voucher_valid: <span>discount voucher, ONLY ¬£5 per theorem now! </span>,
    discover_voucher_invalid: <span>invalid</span>,
    discover_5: <span>Only &pound;5.00</span>,

    //faq

    faq_title: <span>F.A.Q.</span>,
    faq_about: <span>WHO IS THEORYMINE? (about us!)</span>,
    faq_sec1: <span>About your purchase</span>,
    faq_sec2: <span>About how TheoryMine works</span>,
    faq_q1: <span>WHAT CAN I BUY FROM THEORYMINE?</span>,
    faq_q2: <span>WHAT IS GOING TO HAPPEN WHEN I PURCHASE A THEOREM?</span>,
    faq_q3: <span>WILL I BE ABLE TO PURCHASE EXTRA ITEMS WITH MY THEOREM ONCE I PURCHASED MY THEOREM?</span>,
    faq_q4: <span>CAN I CHOOSE THE THEOREM I NAME?</span>,
    faq_q5: <span>CAN I CHANGE THE NAME OF MY THEOREM AFTER IT HAS BEEN PURCHASED?</span>,
    faq_q6: <span>WHAT CAN I CALL A THEOREM?</span>,
    faq_q7: <span>WHICH METHODS OF PAYMENT DO YOU ACCEPT?</span>,
    faq_q8: <span>WHY HASN'T MY THEOREM ARRIVED BY THE DEADLINE YOU PROMISED?</span>,
    faq_q9: <span>WHY IS MY CERTIFICATE NOT FORMATTED CORRECTLY?</span>,
    faq_q10: <span>WHAT IS A THEORY?</span>,
    faq_q11: <span>WHAT IS A THEOREM?</span>,
    faq_q12: <span>WHAT IS A RECURSIVE DEFINITION?</span>,
    faq_q13: <span>WHAT KIND OF THEOREM DOES THEORYMINE DISCOVER?</span>,
    faq_q14: <span>HOW CAN I BE SURE THAT THE PROOF OF MY THEOREM IS CORRECT?</span>,
    faq_q15: <span>HOW IS IT POSSIBLE TO GENERATE THEOREMS?</span>,
    faq_q16: <span>HOW CAN I BE SURE MY THEOREM IS ORIGINAL?</span>,
    faq_q17: <span>HOW CAN I BE SURE THAT MY THEOREM IS NOT TRIVIALLY TRUE?</span>,
    faq_q18: <span>IS MY THEOREM INTERESTING?</span>,
    faq_q19: <span>BY WHAT AUTHORITY CAN I ASSIGN A NAME TO MY THEOREM?</span>,
    faq_q20: <span>WHY DO YOU CLAIM THAT THEOREMS LAST FOR EVER?</span>,
    faq_a1: <span>You can buy new theorems which become yours to name. You will receive a printable certificate in PDF form
      of the theorem and its discovery (including an outline of the proof). You can then give this away, frame it, sing
      it, as you like! Also, you can purchase a range of products to go with your theorem, like T-shirts, mouse mats and
      mugs. All gift items are provided and manufactured by Zazzle.</span>,
    faq_a2: <span>If you are not already registered with TheoryMine, you will receive a user name and password to log into
      the website where you will be able to view the status of your order. It will take a up to 5 working days
      (excluding weekends) for our robot mathematicians to discover your theorem. You will receive a notification email
      once your theorem is discovered. You will then be able to download the certificate by logging into this website,
      and clicking &quot;View Certificate&quot;</span>,
    faq_a3: <span>Yes. You will be able to purchase additional gift packages (t-shirts, mugs and mouse mats) with your
      theorem once you have received your certificate. You can do so by logging in to your account and click on the
      "Gift Items Shop " link next to your theorem name.</span>,
    faq_a4:
      <span>No. The next theorem that our robot mathematicians discover will be given the name you have chosen.</span>,
    faq_a5: <span>No. Once a name has been given to a Theorem, that is the name the theorem will have forever. However, if
      you have just ordered a theorem and your order has not been fulfilled yet, you can change your theorem name by
      emailing us at support@theorymine.co.uk</span>,
    faq_a6: <span>You can call a Theorem whatever you like as long as the name its not inappropriate, libellous,
      defamatory, blasphemous, obscene, offensive to public morality or an incitement to racial hatred or
      terrorism.</span>,
    faq_a7: <span>Payments are carried out on our behalf by PayPal, one of the most popular, secure and established payment
      gateways. PayPal's pages offer the highest level of security and encryption. Users should be reassured by the
      internet standard padlock symbol which will be displayed whilst you are entering your card details. We do not hold
      or see your card details as these are processed directly by PayPal.</span>,
    faq_a8: <span>Note that if you are not logged into your account when you purchase from our website, your notification
      email will come to the email address you have registered with PayPal. Please check that email account to see if
      your notifications emails have arrived. If so, you will also be able to log into the TheoryMine website using the
      user name and password we have sent you. If your notification email has not arrived by the deadline we specify
      above or, if it has, but your certificate is not available at &quot;View Certificate&quot; when you log in, then
      please email us at support@theorymine.co.uk and we will find out what has gone wrong asap.</span>,
    faq_a9: <span>Some PDF readers might not support the mathematical characters that appear in the certificate. You might
      not see these characters when you open the certificate or when you print it. However, if you use Adobe Reader
      (available for free <a href="http://get.adobe.com/reader/">here</a>) you will not have any of these problems.'
    </span>,
    faq_a10: <span>From school mathematics you will recall various kinds of numbers: whole numbers, fractions, decimals,
      etc. You may also have met sets or vectors. These are all examples of mathematical
        objects. The first thing that TheoryMine does is create new kinds of mathematical object and it can generate
      an unlimited number of these. In school mathematics you apply functions
      to numbers, such as addition and subtraction. The second thing that TheoryMine does is create new kinds of
      functions on these new mathematical objects. TheoryMine can also generate an unlimited number of functions. A
      Theory is composed of one or more mathematical objects plus some functions on such mathematical objects.</span>,
    faq_a11: <span>A theorem is a mathematical formula for which we have a
      proof. Both theorems and proofs are within a theory which consists of a set of axioms. A proof is a sequence of
      formulae, starting with some axioms and ending with the theorem. Each non-axiom formula in this sequence follows
      from the previous formulae in the sequence. All the axioms in TheoryMine theories are recursive definitions.</span>,
    faq_a12: <span>>Recursion is a mathematical technique that is much
      used in computer programs. In a recursive definition, the value of a recursive function is defined in terms of
      values of the same function applied to smaller inputs. This sounds circular, but because the function's inputs
      get smaller and smaller the computation eventually stops.TheoryMine also uses recursion to define brand new types
      of input and output for each theory.These are called recursive objects. </span>,
    faq_a13: <span>TheoryMine proves properties of functions. For instance, when it comes to addition, it does not matter
      in which order the numbers are added: 2+3 is equal to 3+2, whereas when it comes to subtraction it does: 2-3 is
      not equal to 3-2. TheoryMine might discover that some of its functions are like addition; giving equal answers
      whatever the order of the objects to which they are applied. Some functions are inverses of each other, e.g.
      addition and subtraction: adding a number and then subtracting it, brings you back to where you started.
      TheoryMine might also discover that some of its new functions are also inverses. The theorems discovered by
      TheoryMine typically take this simple form.</span>,
    faq_a14: <span>The computer programs behind TheoryMine are large and complex and so, like all large complex programs,
      almost certainly contain bugs However, most of the program merely chooses theories and theorems to prove, and
      directs their proof. The construction of the proof is handled by a small, well inspected and highly trusted kernel
      program that only combines axioms and previously proved theorems. It is therefore vanishingly unlikely that any
      proof it constructs would be faulty.</span>,
    faq_a15: <span>TheoryMine is based on decades of world-class research into automated reasoning and artificial
      intelligence at the Universities of Edinburgh, Cambridge and Munich. It uses the grammars of theories and theorems
      to generate candidates, filters out the obviously false and uninteresting ones, and then uses automated reasoning
      to see which of the remainder it can prove.</span>,
    faq_a16: <span>The TheoryMine program constructs brand new mathematical theories, that no-one has previously developed
      by using brand new recursive functions and recursive objects. By definition, all theorems of these new theories
      are themselves brand new.</span>,
    faq_a17: <span>There are two senses in which your theorem is not trivially true. Firstly, note that some mathematical
      theories are inconsistent i.e. the axioms contradict each other. In such theories all formulae are theorems, which
      is clearly undesirable. However, it is a well-established mathematical result that theories consisting only of
      recursive definitions, as TheoryMine's theories are, are inherently consistent. So you can be sure that your
      theorem is not trivial in this sense. The second sense in which these theorems are not trivially true is that they
      cannot be directly derived by a simple calculation. In particular, they are not true by simple rewriting from
      other known theorems, as described in more detail in the answer to the question: <a href="#interesting">IS MY
        THEOREM INTERESTING?</a>.</span>,
    faq_a18: <span>TheoryMine applies a series of filters to remove uninteresting theorems before it generates them. On the
      other hand, don't expect your theorem to earn you the Fields Medal! (the Nobel Prize of Mathematics). In
      particular, we use the notion of interesting initially developed in <a
        href="http://www.springerlink.com/content/bk711q2u247mr967">Conjecture Synthesis for Inductive Theories (Journal
        of Automated Reasoning)</a> which was then further developed in <a
        href="http://www.springerlink.com/content/m885557421m7418m">Scheme-Based Synthesis of Inductive Theories (LNCS,
        Volume 6437)</a>.Technically, this ensures that standard orderings, using known theorems as rewrites, cannot
      prove the new theorem : that there is no direct symbolic calculational proof of the new theorem. </span>,
    faq_a19: <span>It is a long-standing tradition in mathematics that the author of a new theorem has the authority to
      name it. TheoryMine assigns that authority to you.</span>,
    faq_a20: <span>A theorem, once proved, stays proved for ever. The reasoning in the proof is deductive, so contains no
      element of probability or uncertainty. Theorems are abstract objects that are not subject to wear and tear. Even
      diamonds will be destroyed in the heat death of the universe; theorems won't be.</span>,

    //about

    about_title: <span>About Us:</span>,
    about_p1: <span>TheoryMine is a company dedicated to <a href="http://dream.inf.ed.ac.uk/events/automatheo-2010/">automated
      theory exploration</a>: we develop artificial intelligence techniques to discover new mathematical concepts and
      automate proof. By providing some fun applications of theorem proving (e.g. naming new
        theorems!), we sponsor more serious applications of automated reasoning technology. In particular, we are
      working on verification tools to make software more reliable and safe to use, as well as tools to ease the
      exploration of new mathematical concepts</span>,
    about_p2: <span>Our software builds on decades of research by the international community in automated reasoning,
      notably the work in <a href="http://itp2011.cs.ru.nl/ITP2011/Home.html">interactive theorem proving</a> as well as
      <a href="http://cade23.ii.uni.wroc.pl/">automated deduction</a>. They provide amazing software which deserves to
      be more widely used and appreciated.</span>,
    about_p3: <span>TheoryMine was started by a group of researchers in the <a
      href="http://www.ed.ac.uk/schools-departments/informatics/">School of Informatics</a> at <a
      href="http://www.ed.ac.uk/">University of Edinburgh</a>, we are:</span>,
    about_alan: <span>Managing Director of TheoryMine and Professor of Automated Reasoning in the School of Informatics,
      University of Edinburgh, FRS, FREng, FACM.</span>,
    about_fla: <span>Graduated in Artificial Intelligence and Mathematics from the University of Edinburgh. </span>,
    about_lucas: <span>Formerly CTO of TheoryMine and senior researcher with the Mathematical Reasoning Group, part of the
      Centre for Intelligent Systems and their Applications, in the School of Informatics, at the University of
      Edinburgh.</span>,
    about_moa: <span>Assistant professor at Chalmers University of Technology in Gothenburg, Sweden. She did her PhD in the
      Mathematical Reasoning Group at the University of Edinburgh.</span>,
    about_roy: <span>Senior Research Fellow at the School of Informatics, University of Edinburgh and member of the Centre
      for Intelligent Systems and their Applications.</span>,

    //products

    gift_title: <span>Gift Packs:</span>,
    gift_p1:
      <span>When you name a theorem you attach your name to something that will survive throughout history.</span>,
    gift_p2: <span>The creation of a working mathematical theorem or law usually requires extensive work by a rare and
      brilliant mind. This gives the creator the right to have the theorem take their name; names like Gauss, Fermat and
      Pythagoras. Now anyone who wants to have their name immortalised along with the giants of maths and science can do
      so. This is possible thanks to a system that generates and proves completely new theories and theorems.The
      theorems that we produce are guaranteed to be unique, because we generate them from unique theories. Inductive
      theories are guaranteed to be consistent, by design, so the generated theorems are not spuriously true.</span>,
    gift_p3: <span>You can name a new theorem however you like and you will be able to decide if you would like to have a
      certificate detailing your theorem delivered to you, have it published in our journal, and even have it printed on
      a t-shirt!</span>,
    gift_h1: <span>NAME A THEOREM + PDF CERTIFICATE: &pound;15</span>,
    gift_h2: <span>GIFT ITEMS:</span>,
    gift_h1_1: <span>When you buy a theorem you will receive:</span>,
    gift_li1_1: <span>An printable electronic colour PDF Certificate of registration, with the theorem that you named and
      the name that you have chosen to attach to it forever.</span>,
    gift_li1_2: <span>A brochure which will help you interpret your theorem</span>,
    gift_li1_3: <span>A user name and password to log in our website and view your theorems and certificates at any
      time</span>,
    gift_h1_2: <span>In addition you can purchase any of these extras stating your theorem:</span>,
    gift_li2_1: <span>A t-shirt:from &pound;14.10</span>,
    gift_li2_2: <span>A mug:from &pound;12.35</span>,
    gift_li2_3: <span>A mouse mat:from &pound;10.10</span>,
    gift_provider: <span>All gift items are provided and manufactured by <a href="http://www.zazzle.co.uk/">Zazzle</a>'
    </span>,
    gift_end: <span>To buy a gift item first purchase a theorem. Once you receive this you will be able to follow the "Gift
      Items Shop" link next to your theorem name on your profile page</span>,

    //Testimonials

    tes_title: <span>Testimonials:</span>,
    tes_p1: <span>"This really captured my imagination and I&#39;m delighted to buy TheoryMine&#39;s first Theorem. What an
      inventive use of Scotland&#39;
      s expertise in artificial intelligence to create such a novel and fun product"</span>,
    tes_p2: <span>"During my time as an eager undergraduate mathematician, I'd often wonder what it would feel like to
      prove a truly new result and have my name immortalised in the mathematical history books. I thought that dream had
      died when I gave up maths to become a science writer, but Aron's theorem is now a reality"</span>,
    tes_p3: <span>"This is a superb example of innovation and creation."</span>,
    tes_p4: <span>"The theorems start at &pound;15 each; &pound;20 cheaper than changing your name to Pythagoras by deed
      poll"</span>,
    tes_p5: <span>"This year's naming gift is this ingenious (or possibly even genius) one."</span>,
    tes_p6: <span>"It&#39;s never too early to start enjoying maths, and this is a present that will last a
      lifetime."</span>,
    tes_p7: <span>Listen to BBC's Material World Interview</span>,

    //Abuse

    abuse: <span>Thank your reporting abuse of the system. We will do our best to investigate the incident.</span>,

    //Bad_cert_id

    badid_title: <span>Bad certificate id</span>,
    badid_p: <span>It looks like you entered a incomplete or incorrect certificate link. Please check your certificate
      link. If you continue to have a problem, please</span>,

    //Cancellation

    canc_title: <span>Cancellation Policy</span>,
    canc_p: <span>When you buy from TheoryMine your theorem is produced specifically for you. Therefore you can cancel at
      any time before production begins. All you have to do is email us on support@theorymine.co.uk and we will get your
      money refunded and order cancelled. If production has begun then unfortunately we cannot refund your order. If
      your order is not satisfactory (i.e.-theorem is not unique) then you can certainly let us know and have your
      theorem refunded.</span>,

    //Timeout

    timeout_title: <span>You have been logged out</span>,
    timeout_p1: <span>You get automatically logged out after </span>,
    timeout_p2: <span>minutes of inactivity, or if you try to access a restricted page. To continue, login
      again; this login link will open in another window and then you can try to reload this page.</span>,
    //unlock
    unlock_title: <span>Account Unlocked!</span>,
    unlock_success: <span>Your account has been unlocked and you can now</span>,
    unlock_login: <span>You are already logged in. You need to logout before you can unlock an
      account.</span>,
    unlock_failed1: <span><h2> Account Unlock Failed </h2>Your account is either not locked, or has been locked again since
      you followed this link. If your account is unlocked, you can simply</span>,
    unlock_failed2: <span>Otherwise check your email. If you have forgotten your password you can make a</span>,
    unlock_failed3: <span>request to change your password</span>,

    //report_name

    repotname_title: <span>Abusive name report form.</span>,
    repotname_q1: <span>Why do you think this theorem name is abuvise?</span>,
    repotname_q2: <span>Your Email address:</span>,
    repotname_button: <span>Report</span>,

    //change_pass

    changepass_invalid: <span>You have used an invalid code or email address. Perhaps this was a code from an old attempt
      to change your password.If you need to change your password, please enter your email address below and click on
      the "Request password change" button.</span>,
    changepass_emailsent1:
      <span>An email has been sent to </span>,
    changepass_emailsent2:
      <span>with a link that will allow your to change your password.</span>,
    changepass_passchanged:
      <span>Your password has been changed!</span>,
    changepass_login:
      <span>You can now login.</span>,

    changepass_blankpass:
      <span>You have to enter a blank password!</span>,
    changepass_doit:
      <span>You can now change your password.</span>,
    changepass_newpass:
      <span>Type in your new password:</span>,
    changepass_returnlogin:
      <span>Return to login page</span>,
    changepass_title:
      <span>This page allows you to request a change your TheoryMine password.</span>,
    changepass_p:
      <span>Once you have requested to change your password, we will email you with a special link that will let you type
        in a
        new password for your account.</span>,
    changepass_loginasnormal:
      <span>login as normal.</span>,
    changepass_enteremail:
      <span>Enter the email address of your TheoryMine account</span>,
    changepass_requestpass:
      <span>Request password change</span>,

    //gadgets

    gadgets_title:
      <span>Gift Items for:</span>,
    gadgets_p1:
      <span>You can now purchase TheoryMine T-shirts, mouse-pads and mugs!<br>All gift items are provided by <a
        href="http://www.zazzle.com/" target="_blank">Zazzle</a> but are personalized with your TheoryMine
        theorems.'</br></span>,
    gadgets_p2: <span>You can then choose which country you want your items to be shipped from (by choosing the
      closest
      country to you, you might get cheaper shipping costs). It is then possible to visit the TheoryMine gift shop
      where
      you can purchase items personalized with your selected theorem! Pick from lots of different styles, colors
      and
      sizes and costumize your items!</span>,
    gadgets_p3: <span>For more informations on your purchase please refer to the instructions <a
      href="http://www.zazzle.com" target="_blank">Zazzle</a> and to their <a
      href="http://www.zazzle.co.uk/mk/policy/user_agreement" target="_blank">User Agreement</a> and <a
      href="http://www.zazzle.co.uk/mk/policy/privacy_policy" target="_blank">privacy policy</a>.</span>,
    gadgets_wherefrom: <span>Please select which country you would like to get your items shipped from:</span>,
    gadgets_selection: <span>You have selected:</span>,
    gadgets_go: <span>Go to the shop!</span>,
    gadgets_northamerica: "North America",
    gadgets_canada: "Canada",
    gadgets_usa: "U.S.A",
    gadgets_europe: "Europe",
    gadgets_austria: "Austria",
    gadgets_belgium: "Belgium",
    gadget_france: "France",
    gadgets_germany: "Germany",
    gadgets_netherlands: "Netherlands",
    gadgets_portugal: "Portugal",
    gadgets_spain: "Spain",
    gadgets_sweden: "Sweden",
    gadgets_swiz: "Switzerland",
    gadgets_uk: "U.K.",
    gadgets_asia: "Asia/Pacific",
    gadgets_australia: "Australia",
    gadgets_japan: "Japan",
    gadgets_newz: "New Zealand",
    gadgets_latin: "Latin America",
    gadgets_brazil: "Brazil",
    gadgets_other: "Other",
    //login

    login_title: <span>Login to TheoryMine</span>,
    login_failed: <span>Login failed, check your email address/login name and re-enter your password.</span>,
    login_resetpassword: <span>reset your password</span>,
    login_waiting_email: <span>You need to read your email, you have been emailed a link that you need in order to
      login.</span>,
    login_noaccount: "Don't have an account?",
    login_pass_forgot: <span>forgot your password? </span>,

    //register

    register_title: 'Register with TheoryMine',
    register_missing_entry: <span>Please fill the fields marked with * and re-enter your password.</span>,
    register_mismatch: 'Your passwords did not match, please re-enter it',
    register_too_short: 'Your password must be at least 8 characters long',
    register_no_numbers: 'Your password must contain at least a number',
    register_no_letters: 'Your password must contain at least a letter',
    register_privacy: <span>Information on how we use the personal data that you submit on our site is contained in
      our
      privacy and cookie policy</span>,
    register_retype1: 'Retyped password:',
    register_retype2: <span>please retype your password here</span>,
    register_nearly:
      <span>Thank you, registration is nearly complete. An email has been sent to: </span>,
    register_checkemail: <span>The next thing you need to do is check your email. The email contains a link to
      unlock
      your account and complete the registration process. </span>,

    //profile

    profile_login: <span>You need to login to access you TheoryMine profile</span>,
    profile_enterpass: <span>You need to enter your password to update your details.</span>,
    profile_wrongpass: <span>The password you enetred did not match your old password, enter your old password to
      update
      your details. </span>,
    profile_edit: <span>Edit Your Details:</span>,
    profile_needto: <span>To make changes you need to enter your </span>,
    profile_good: <span>Details updated</span>,
    profile_return: <span>Return to overview</span>,
    profile_details: <span>Your Details:</span>,
    profile_changepass: <span>(You can also change your password)</span>,

    //contact

    contact_title: <span>Contact Us:</span>,

    logout: <span>You are now logged out.</span>,

    ///*******COMMON PARTS*************///

    //dicovered_theorems

    dicoveredthm_one: <span>You have named one theorem</span>,
    dicoveredthm_younamed: <span>You have named </span>,
    dicoveredthm_viewcert: 'View Certificate',
    dicoveredthm_viewbro: 'View Brochure',
    dicoveredthm_shop: 'Gift Items Shop',

    //dicoveries-in-progress

    progress_none: <span>You have no discoveries in progress, would you like to name a new theorem?</span>,
    progress_one: <span>You have one discovery in progress:</span>,
    progress_youhave: <span>You have </span>,
    progress_ndisc: <span>discoveries in progress:</span>,
    progress_placedon: <span>This order was placed on </span>,
    progress_ordid: <span>and has order-id:</span>,

    //footer

    footer_tc: 'Terms & Conditions',
    footer_contact: 'Contact Us',
    footer_privacy: 'Privacy Policy',
    footer_cancellations: 'Cancellations',
    footer_questions: 'Got a question about TheoryMine? Email us at',

    //header

    header_tagline: <span>Personalized mathematical theorems</span>,
    header_next: <span>you could be next!</span>,
    header_clear: <span>clear messages</span>,

    //main_links_header

    links_loggedin: 'Logged in as ',
    links_profile: 'Profile',
    links_logout: 'Logout',
    links_login: 'Login',
    links_home: 'Home Page',
    links_disc: 'Name a Theorem',
    links_faq: 'F.A.Q.',
    links_about: 'About Us',
    links_gift: 'Gift Packs',
    links_test: 'Testimonials',

    //question-mark

    questionmark: <span>This is the name that will be given to your theorem forever. < br/> It can be either a name, a nick
      name or any other thing as long as it meets the following criteria:
      <br/> < br/> - It must be a no more than 30 characters long. <br/> - It must NOT be inappropriate,
      libellous, defamatory, blasphemous, obscene, offensive to public morality or an incitement to racial hatred or
      terrorism. <br/> < br/> Theorems names will be filtered and if reported and recognised to be inappropriate, they
      will be removed from our database and records without refund. </span>,
    certex_title: 'An Example Certificate Explained',
    certex_p1: 'The following is an example of a certificate generated by TheoryMine. An explanation of a formula can be obtained by clicking on it.',
    certex_q1: 'What does it mean? A quick overview',
    certex_a1: <span>
      <p> This particular theorem was created in honour of Quentin Cooper, who interviewed us for the BBC Radio 4 science magazine programme Material World on 15th April 2010. The certificate above is different from the one originally presented  to Quentin. We have updated it into the format of the certificates we currently issue to customers.  In particular, we have now standardised the way we name the various mathematical expressions.  </p> <p> Following the name of the theorem, <em>Quentin\'s Theorem</em>,the certificate contains, in turn: the definition of a new kind of mathematical object, <em>T</em>; the definition of a new mathematical function, <em>f<sub>&#945</sub></em>; and the statement of the theorem.</p> <p> One way to envisage <em>T</em> is as four copies of the non-negative whole numbers 0, 1, 2, 3, ..., each copy in a different colour, say red, blue, green and yellow: <p
      style="color:#FF0000">0, 1, 2, 3, ...</p>, <span style="color:#0000FF">0, 1, 2, 3, ...</span>, etc.  So each member of <em>T</em> has both a numerical value and a colour.  <em>f<sub>&#945</sub></em> is then a kind of addition on these numbers. Its inputs are two coloured numbers and its output is a third coloured number, whose numerical value is the sum of those of the inputs and whose colour is that of the <em>second</em> input.</p><p> Note that, unlike regular addition, <em>f<sub>&#945</sub></em> is not commutative, that is its output depends on the <em>order</em> of its inputs. For instance, <em>f<sub>&#945</sub>(<span
      style="color:#FF0000">1</span>, <span style="color:#0000FF">2</span>)=
      < span style="color:#0000FF"> 3 </span></em> but < em> f < sub> &#945 </sub>(<span
      style="color:#0000FF">2</span>, <span style="color:#FF0000">1</span>)= <span style="color:#FF0000">3</span> </em>. Notice that the numerical values of the outputs are the same, but the colours are different, as they depend on the colour of the second input. </p><p> However, if we add three coloured numbers together, then the order of the first two is immaterial.This is because the colour of the output will be that of the third input, so will not depend on the colours of the first two inputs.For instance, <em>
  f<sub>&#945</sub>(<span style="color:#FF0000">1</span>,
  f<sub>&#945</sub>(<span style="color:#0000FF">2</span>,<span style="color:#00FF00">3</span>)) =
  f<sub>&#945</sub>(<span style="color:#0000FF">2</span>,
  f<sub>&#945</sub>(<span style="color:#FF0000">1</span>,<span style="color:#00FF00">3</span>))
</em> since both sides equal < span
      style="color:#00FF00"> 6 </span>. The generalisation of this equality is Quentin\'s Theorem, i.e., it is a restricted variant of commutativity. </p>

<p> We now give a more technical explanation of the certificate. The technical
  terms used in this explanation are also defined in the <a href="#glossary">glossary</a> at the end.</p>
      </span>,
    'certex_q2': 'A bluffer\'s guide to recursion',
    'certex_a2': <span><p> Both <em>T</em> and <em>f<sub>&#945</sub></em> are defined by<em>recursion</em>. This is a form of definition in which the body of the definition contains the thing being defined. This sounds circular, but it need not be. Consider, the following recursive definition of the, so called, <em>natural numbers</em>, i.e., the non-negative whole numbers 0, 1, 2, 3, .... </p> <p><center><em> N = 0 | s(N) </em></center></p><p> where <em>s</em> is called the <em>successor function</em>. This definitiongenerates a representation of the natural numbers of the form <em>0, s(0),s(s(0)), s(s(s(0))), ...</em>, where each application of <em>s</em> increases the number by 1. This representation is due to the mathematician <a
      href="http://en.wikipedia.org/wiki/Peano_axioms"> Giuseppe Peano (1858-1932
)</a>. The recursive definition consists of two cases: a base case <em>0</em> and a step case <em>s(N)</em>.Any particular natural number corresponds to one of these cases.Note that the step case contains < em> N </em>, which is the thing being defined. Think of this, not as a circle, but as a spiral.  <em>0</em> is at the centre of the spiral; each application
of < em> s </em> winds the spiral out by a complete circuit. <em>0</em> and < em> s </em> are called <em>constructor functions</em>, because they are used to construct new types of mathematical objects, such as our four - coloured numbers.Note that constructor functions
are < em> deliberately </em> not defined. They are taken as primitive mathematical objects and are used in the definitions of other mathematical objects and defined functions, such as +. Definitions have to stop unfolding at some point, and that point is with the constructor functions. </p> < p> The boolean truth values, <em>true</em> and < em> false </em>, can be defined by a degenerate form of recursion, in which there are two base cases and no step cases: <em>B = true | false</em>. </p>
<p> We will use
  <em>B</em> and <em>N</em> as the basis for defining new sets of recursively defined mathematical objects, such as <em>T</em> in our example certificate above.
</p>
<p> The function <em>+</em> can also be defined recursively. It takes two members of <em>N</em> as inputs and returns one as output.  It also has a base case and a step case.</p><p><center><strong>Type:
</strong>
<em> + : N &times;
  N &rarr; N </em>
</center></p>
<p>
  <center><strong>Base case:</strong> <em> 0+y = y </em></center>
</p>
<p>
  <center><strong>Step case:</strong> <em> s(x)+y = s(x+y) </em></center>
</p>
<p> The type line says that + takes two natural numbers as inputs and outputs one natural number. The base case and step
  case lines constitute the recursive definition of +. The recursion is on <em>x</em>, the first input of +. Note that,
  in the step case, the body of the definition also contains +, the function being defined. This is also not a circular
  definition, but a spiral one. This time the recursion spirals inwards. Starting with some particular value of
  <em>x</em>, say <em>s(s(o))</em>, the step case is applied to rewrite <em>s(s(0))+y</em> first to <em>s(s(0)+y)</em>
  and then to <em>s(s(0+y))</em>. Now the base case of the definition can be used to rewrite this as <em>s(s(y))</em>
  and the calculation is finished. Notice how the step case is organised so that + is applied to a smaller occurrence of
  <em>x</em> in the body of the definition than in the head. <em>N</em> has been defined to be <em>well founded</em>,
  which means that a sequence of its members cannot keepgetting smaller forever: sooner or later it will reach 0. This
  means that any calculation carried out using + will eventually stop. We can only apply the step case a finite number
  of times. Eventually, only the base case will be applicable and, after the base case, nothing will be applicable. To
  contrast functions such as + with the constructor functions, such as 0 and <em>s</em>, + is called a <em>defined
    function</em>. </p>
      </span>
    ,
    certex_q3: 'Defining four-coloured numbers',
    certex_a3:
      <span>
<p>Our certificate introduces a new type of mathematical object called <em>T</em>, our four-coloured numbers. <em>T</em>
  is defined <a
    href="#recursion">recursively</a> as:</p>
<p>
  <center><em> T =
    C<sub>a</sub>(B,B) | C<sub>b</sub>(T) </em></center>
</p>
<p> where <em>C<sub>a</sub></em> and <em>C<sub>b</sub></em> are new constructor functions.
  <em>
    C<sub>a</sub></em> is a base constructor, since it does not have <em>T</em> among its inputs. It is analogous to the
  0 constructor function of <em>N</em>, except that it has two inputs. These inputs are both members of <em>B</em>,
  i.e., they are one of two truth values: <em>true</em> and <em>false</em>. There are, therefore, four ways to
  instantiate <em>C<sub>a</sub></em>: <em>C<sub>a</sub>(true,true)</em>, <em>C<sub>a</sub>(true,false)</em>,
  <em>C<sub>a</sub>(false,true)</em> and <em>C<sub>a</sub>(false,false)</em>, i.e., there are four versions of 0. Above
  we envisaged these four versions of 0 as four differently coloured 0s, e.g., <em>C<sub>a</sub>(true,true)</em> could
  be envisaged as <span
    style="color:#FF0000">0</span> and <em>C<sub>a</sub>(true,false)</em> as <span style="color:#0000FF">0</span>.
</p>

< p>< em> C < sub> b
  </sub></em> is a step constructor, since it does have < em> T
    </em> among its inputs.It is analogous to the < em> s
    </em> constructor

    function of<em>

      N
      </em>. The main difference to <em>s</em> isthat
      < em> C < sub> b
        </sub></em> can be applied to four different kinds of base constructor.We can envisage these < em> C < sub> b
        </sub></em> applications as colour preserving.For instance, since < em> C < sub> b
        </sub>(C<sub>b</sub> (C < sub> a
        </sub>(true,true)))</em> hasa < span
    style="color:#FF0000"> 0 </span> at its heart, we can envisage it as <span style="color:#FF0000"> 2 </span>.</p>

  < p> Note
  that, just as
  with <em>0</em>, <em>s</em>, <em>true</em> and
  < em> false
    </em>, the new constructor functions, <em>C<sub>a</sub>
    </em> and
    <em>C<sub>b</sub></em>
    are undefined primitives.
  </p></span>,
    'certex_q4': 'Defining four-coloured addition',
    'certex_a4': <span><em>f<sub>&#945</sub></em> is a <a href="#recursion">recursively</a> defined function, whose definition is:

  < p>
  < center>< strong> Type:</strong>
    <em> f<sub>&#945</sub> : T &times; T &rarr; T </em></center>
</p>
<p>
  <center><strong>Base case:</strong> <em> f<sub>&#945</sub>(C<sub>a</sub>(x,y),z) = z </em></center>
</p>
<p>
  <center><strong>Step case:</strong>
    <em> f<sub>&#945</sub>(C<sub>b</sub>(x),y) = C<sub>b</sub>(f<sub>&#945</sub>(x,y)) </em></center>
</p>

<p> Compare this definition to that of + above. It\'s essentially the
  same. <em>f<sub>&#945</sub></em> is just a version of addition.</p>

<p> To see why each output of <em>f<sub>&#945</sub></em> has the same
  colour as its second input, consider first the base case. The first
  input of <em>f<sub>&#945</sub></em> is one of the coloured 0s,
  <em>C<sub>a</sub>(x,y)</em>, but regardless of its colour, the output
  is its second input, <em>z</em>, so it necessarily has the
  same colour as this second input. </p>

<p> Now consider the step case of the definition of
  <em>f<sub>&#945</sub></em>. Assume that we have already inferred that
  the output of <em>f<sub>&#945</sub>(x,y)</em> has the same colour as
  its second input <em>y</em>. Since <em>C<sub>b</sub></em> is colour
  preserving, then <em>f<sub>&#945</sub>(C<sub>b</sub>(x),y)</em> also
  has the same colour as <em>y</em>, which is its second input. In this
  way, starting from the situation when <em>f<sub>&#945</sub></em> has
  first input <em>C<sub>a</sub>(x,y)</em>, we can incrementally spiral
  out showing that the argument holds for each application of
  <em>C<sub>b</sub></em> and, therefore, for every member of
  <em>T</em>. This is called an <em>inductive proof</em>. It is the same
  kind of reasoning that TheoryMine uses to prove all the theorems that
  it generates. </p>
.</span>,
    'certex_q5': 'Proving Quentin\'s Theorem',
    'certex_a5': <span>
      <p> On the certificate, Quentin\'s Theorem is said to be proved by "induction on <em>y</em>". What does this mean? </p>
  <p><em>Induction</em> is closely related to <a
    href="#recursion">recursion</a>. Theorems composed of <a
    href="#functions">recursively defined functions</a> applied to <a
    href="#data-type">recursively defined objects</a>, such as Quentin\'s theorem, are
  usually proved by induction. Firstly, an induction variable is chosen. In this
  case it is <em>y</em> - although, as Quentin\'s Theorem is symmetric with
  respect to <em>x</em> and <em>y</em>, it could equally well have been
  <em>x</em>. The induction variable will range over some recursively defined
  mathematical object. In our case, <em>y</em> ranges over objects of type
  <em>T</em>.</p>

<span> Just like a recursive definition, an inductive proof is divided into
  base and step cases.</span>

  <ul>

    <li>In the base cases, the theorem is proved with the induction variable being
      instantiated to the base case of the mathematical objects it ranges over. In our
      case, there is only one base case, in which <em>y</em> is instantiated to
      <em>C<sub>a</sub>(u,v)</em>. So, we have to prove the special case of the
      theorem:
      <p>
        <center><strong>The base case:</strong><em> f<sub>&#945</sub>(C<sub>a</sub>(u,v),f<sub>&#945</sub>(x,z)) =
          f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>a</sub>(u,v),z)) </em>.
        </center>
      </p>
    </li>

    <li>In the step cases, the theorem is assumed to hold for the induction
      variable. This is called the <em>induction hypothesis</em>. The theorem is then
      proved with the induction variable being instantiated to the step case of the
      mathematical objects it ranges over. This is called the <em>induction
        conclusion</em>. During the proof of the induction conclusion, we are allowed to use the induction hypothesis.
      In our
      case, there is only one step case. In its induction conclusion, <em>y</em> is instantiated to
      <em>C<sub>b</sub>(y)</em>. So, we assume:

      <p>
        <center><strong>The induction hypothesis:</strong> <em> f<sub>&#945</sub>(y,f<sub>&#945</sub>(x,z)) = f<sub>&#945</sub>(x,f<sub>&#945</sub>(y,z))
        </em></center>
      </p>

      <p>and then have to prove:</p>

      <p>
        <center><strong>The induction conclusion:</strong> <em> f<sub>&#945</sub>(C<sub>b</sub>(y),f<sub>&#945</sub>(x,z))
          = f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>b</sub>(y),z)) </em>.
        </center>
      </p>
    </li>
  </ul>

  <p> At first sight, inductive proofs look circular. During the proof of the step
    case, we <em>assume the theorem already holds</em>. But, once again, the
    inductive proof is really spiral. We start by proving that the theorem holds for
    the centre of the spiral (the base case), then the step case can be used to
    prove that it holds for one circuit of the spiral, then for two circuits, then
    three, and so on for any number of circuits. </p>

  <p><strong>The base
    case</strong> can be proved by two applications of the base case of <a
    href="#functions">the recursive definition of <em>f<sub>&#945</sub></em></a>, namely <em>
    f<sub>&#945</sub>(C<sub>a</sub>(u,v),w) = w </em>, where I have renamed the variables to avoid confusion with those
    in the theorem. These can be used to rewrite the base case in two stages, as follows:
  </p>

  <p>
    <center><em> f<sub>&#945</sub>(C<sub>a</sub>(u,v),f<sub>&#945</sub>(x,z)) =
      f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>a</sub>(u,v),z)) </em>.
    </center>
  </p>

  <p>
    <center><em> f<sub>&#945</sub>(x,z) = f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>a</sub>(u,v),z)) </em></center>
  </p>

  <p>
    <center><em> f<sub>&#945</sub>(x,z) = f<sub>&#945</sub>(x,z) </em></center>
  </p>

  <p> At this point, the equation is between two identical expressions, so the base case is proved.</p>

  <p> In <strong>the step case</strong>
    , the induction conclusion can be proved by:</p>
  <ul>
    <li> two applications of the step case of <a href="#functions">the recursive definition of
      <em>f<sub>&#945</sub></em></a>, namely <em> f<sub>&#945</sub>(C<sub>b</sub>(y),v) =
      C<sub>b</sub>(f<sub>&#945</sub>(y,v)) </em>;
    </li>
    <li> one application of a variant of this equation, namely <em> f<sub>&#945</sub>(u,C<sub>b</sub>(v)) =
      C<sub>b</sub>(f<sub>&#945</sub>(u,v)) </em>, which must be first proved as an intermediate lemma; and
    </li>
    <li> an application of the induction hypothesis.</li>
  </ul>
  <p>The induction conclusion is rewritten in three stages, as follows: </p>

  <p>
    <center><em> f<sub>&#945</sub>(C<sub>b</sub>(y),f<sub>&#945</sub>(x,z)) =
      f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>b</sub>(y),z))
    </em>.
    </center>
  </p>

  <p>
    <center><em> C<sub>b</sub>(f<sub>&#945</sub>(y,f<sub>&#945</sub>(x,z))) =
      f<sub>&#945</sub>(x,f<sub>&#945</sub>(C<sub>b</sub>(y),z)) </em>.
    </center>
  </p>

  <p>
    <center><em> C<sub>b</sub>(f<sub>&#945</sub>(y,f<sub>&#945</sub>(x,z))) = f<sub>&#945</sub>(x,C<sub>b</sub>(f<sub>&#945</sub>(y,z)))
    </em>.
    </center>
  </p>

  <p>
    <center><em> C<sub>b</sub>(f<sub>&#945</sub>(y,f<sub>&#945</sub>(x,z))) = C<sub>b</sub>(f<sub>&#945</sub>(x,f<sub>&#945</sub>(y,z)))
    </em>.
    </center>
  </p>

  <p>The induction hypothesis can now be used to rewrite the left hand side to:</p>

    <p>
      <center><em> C<sub>b</sub>(f<sub>&#945</sub>(x,f<sub>&#945</sub>(y,z))) = C<sub>b</sub>(f<sub>&#945</sub>(x,f<sub>&#945</sub>(y,z)))
      </em>.
      </center>
    </p>

    <p> At which point, the equation is again between two identical expressions, so
      the step case is proved. The lemma was previously proved by TheoryMine and is
      called <em> The Richard Scott Russell Theorem </em>. Its proof is also by
      induction and is left as an exercise for the reader. </p></span>,
    certex_q6: 'Variations on a theme',
    certex_a6:
      <span><p> The <a href="#data-type">four-coloured numbers</a> described above are just
      one among infinitely many possible new mathematical objects. Different kinds of
      objects are generated by the choice of base and step constructors and by the
      inputs that we give them. For instance, suppose we had chosen to
      give <em>C<sub>a</sub></em> only one boolean input.</p>

    <p>
      <center><em> T = C<sub>a</sub>(B) | C<sub>b</sub>(T) </em></center>
    </p>

    <p>Then there would only be two 0s, so the numbers would have only two colours.</p>

    <p>Alternatively, we could have had two base case constructors. </p>

    <p>
      <center><em> T = C<sub>a</sub>(B,B) | C<sub>a\'</sub>(B,B) | C<sub>b</sub>(T) </em></center>
    </p>

    <p>Now there would be eight 0s, so the numbers would have eight colours.</p>

    <p>Or we could have given the base constructor a natural number as its input.</p>

    <p>
      <center><em> T = C<sub>a</sub>(N) | C<sub>b</sub>(T) </em></center>
    </p>

    <p>Now there would be an infinite number of 0s and so infinitely many colours of numbers.</p>

    <p> It gets more interesting if we give the step constructor additional arguments.</p>

    <p>
      <center><em> T = C<sub>a</sub>(B,B) | C<sub>b</sub>(T,N) </em></center>
    </p>

    <p>Now there are infinitely many different kinds of successor function. Another
      way to think of this is as defining a sequence of natural numbers, i.e., the
      numbers associated with each of the successor functions used in a
      number. So,
      <em>C<sub>b</sub>(C<sub>b</sub>(C<sub>b</sub>(C<sub>a</sub>(true,true),1),3),2)</em> would be the sequence <span
        style="color:#FF0000">1,3,2</span>, for instance. </p>

    <p> Nor do we have to stick to <em>B</em> and <em>N</em> as inputs to these constructor functions. Having defined
      <em>T</em>, for instance, we could use it as an input to a constructor function for some new objects <em>T\'</em>,
    </p>

    <p>
      <center><em> T\' = C<sub>a</sub> | C<sub>b</sub>(T\',T) </em></center>
    </p>

    <p> which would allow us to have sequences of differently coloured numbers: <span
      style="color:#FF0000">1</span>, <span style="color:#00FF00">3</span>, <span
      style="color:#0000FF">2</span>. </p></span>,
    'certex_glossary_title': 'Glossary',
    'certex_glossary': <span>
    <p> We have collected together the definitions of some of the technical terms
      used in this explanation. These terms have alternative names in mathematics and
      computer science. We also give some of their synonyms.
    </p>

        <ul>

          <li><strong>Axioms:</strong> are the formulae that are assumed to be true in a
            theory and are used in proofs to derive new theorems from old. The only axioms
            used by TheoryMine are the recursive definitions of functions.
          </li>

          <li><strong>Booleans:</strong> are the set of truth values: <em>true</em> and <em>false</em>.</li>

          <li><strong>Constructor functions:</strong> are functions used to define
            mathematical objects recursively.
          </li>

          <li><strong>Defined functions:</strong> transform one or more inputs into an
            output. In computer science, they are also known
            as <em>programs</em>, <em>procedures</em> or <em>sub-routines</em>. In
            particular, the kind of recursively defined functions we use are <em>functional
              programs</em>.
          </li>

          <li><strong>Induction:</strong> is a form of proof in which earlier instances of
            the theorem are used as assumptions when proving later instances of the theorem,
            where earlier and later are defined by a well-founded recursive order. This type of induction is also called
            <em>mathematical induction</em>, which is a form of <em>deduction</em> with no element of uncertainty or
            probability. It is not to be confused with <a
              href="http://www.newworldencyclopedia.org/entry/Induction_%28philosophy%29#Enumerative_induction">enumerative
              induction</a>, in which a general rule is conjectured from a finite set of its instances. Enumerative
            induction, unlike mathematical induction, <em> is</em> uncertain and fallible.
          </li>

          <li><strong>Induction Conclusion:</strong> is the later instance of the theorem that is proved in an inductive
            proof.
          </li>

          <li><strong>Induction Hypothesis:</strong> is the earlier instance of the theorem that is assumed in an
            inductive
            proof.
          </li>

          <li><strong>Inputs:</strong> are the values
            given to a defined or constructor function. They are also known
            as <em>arguments</em> and <em>parameters</em>.
          </li>

          <li><strong>Outputs:</strong> are the values returned by a defined or
            constructor function. They are also known as <em>results</em>.
          </li>

          <li><strong>Mathematical objects:</strong> are the set of values that can be
            input to or output by a defined or constructor function. In computer science,
            they are also known as <em>data-structures</em>, <em>data-types</em> or
            sometimes just <em>types</em>.
          </li>

          <li><strong>Natural numbers:</strong> are the set of non-negative integers (whole numbers): <em>0, 1, 2, 3,
            ....</em></li>

          <li><strong>Proofs:</strong> are the sequences of inference steps used to prove a
            theorem. Each inference step is either an axiom or follows from earlier theorems
            in the sequence by some rule of logic.
          </li>

          <li><strong>Recursion:</strong> is a form of definition in which a function or
            mathematical object is defined in terms of itself.
          </li>

          <li><strong>Theorems</strong> are formulae that can be proved. A theorem used to
            help prove another theorem is called a <em>lemma</em>. A theorem that follows
            immediately from another one is called a <em>corollary</em>. Theorems are
            sometimes also called <em>propositions</em>.
          </li>

          <li><strong>Theories</strong> are collections of mathematical objects and
            defined functions. These implicitly define a set of theorems, so \'theories\' is
            also sometimes used to refer to this set of theorems.
          </li>

        </ul>
      </span>,

    ///*******EMAIL*************/
    //

    //general

    login: 'log-in'
    ,
    faq:
      'f.a.q'
    ,
    letusknow:
      'let us know'
    ,
    register:
      'Register'
    ,
    theorems:
      'theorems'
    ,
    email:
      'Email Address'
    ,
    firstname:
      'First Name'
    ,
    lastname:
      'Last Name'
    ,
    cancel:
      'Cancel'
    ,
    password:
      'Password'
    ,
    select:
      'Select'
    ,
    edit_details:
      'Edit Details'
    ,
    change_password:
      'Change Password'
    ,
    update: "Update my details",
    submit: 'Submit',
    next: 'Next',
    accept_conditions: <span>I have read and accept TheoryMine's
      <Link to={pagesUrls.termsAndConditions}> Terms and Conditions</Link> and
      <Link to={pagesUrls.privacyPolicy}> Privacy Policy</Link>
    </span>,
    submit_payment: 'Submit Payment',
    please_login: <span>Please <Link to={pagesUrls.login}>log in </Link> or <Link
      to={pagesUrls.register}>register</Link> before proceeding with your order.</span>,
    order_successful: 'Thank you for your order!',
    order_successful_2: 'You will receive an email when your theorem is ready to download!',
    my_theorems: 'My Theorems',
    thm_in_progress: 'Waiting to be discovered',
    thm_processed: 'Discovered',
    name_inappropriate: 'The name you have choosen might be inappropriate. Please double check the name you have entered.',
    ///*******ERRORS*************/
    //

    err_empty: 'Please enter a value for this field',
    err_accept_t_anc_c: 'Please agree to our Privacy Policy and Terms of Use to register.'

  }
}

export const local = localisation[ 'EN-GB' ]