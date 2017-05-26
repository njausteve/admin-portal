/**
 * (C) TATA Consultancy Services, 2017
 * Highly Confidential and Inflammable also
 * AppMart SSP Portal
 * by njausteve
 */
(function() {
    'use strict';

    angular
        .module('ssp')
        .controller('faqController', faqController);


    /** @ngInject */
    function faqController() {

        var vm = this;

        vm.oneAtATime = true;
        vm.open = false;


        vm.faqList = [

            {
                question: 'What is the programme applicable to ? will i get access to all available Tcs Enterprise  Applications on my device  ?',
                answer: 'All employees of TCS and its subsidiaries globally may choose to register for this program. The TCS App store provides a list of enterprise applications you may download. Access to Enterprise Application is role based. For example, time sheets will be enabled for all employees whereas Smart Sales will be available to employees in key sales and client facing roles.'
            },
            {
                question: 'How will my device be impacted ?',
                answer: 'Id nullam definitionem sed, eu malorum copiosae eum. Amet appareat te vel. Nibh atomorum id sed. Te ius homero incorrupte adversarium, labitur detraxit torquatos pro ut.'
            },
            {
                question: 'What are the possible implications if I decide not to enroll ? ',
                answer: 'Usu ea cibo solum appetere, est vitae denique salutandi no. Deleniti complectitur per cu. Nulla evertitur contentiones eos ex, ad stet congue qui, nam quis facer in. Per at sint dicat eirmod. Vim id sale brute equidem.'
            },
            {
                question: 'I am facing problems with registration. How can I get help ?',
                answer: 'Has te aeque causae animal. Vim tota persius noluisse in, saepe aliquip ea sed, explicari referrentur vim et. Ei case accusam eam, dolor mentitum liberavisse id duo'
            },
            {
                question: 'What happens if I choose to discontinue to be a part of the program ?',
                answer: 'Eam no liber adipisci sadipscing, mel ex aliquid offendit tacimates. Quo at nulla equidem, autem assum senserit has an. Quod reque quo cu, vidit inani referrentur ea sit. Laoreet suscipit consetetur eos ea, utamur delectus cu eam.'
            },
            {
                question: 'Is there any restrictions on how many times I will be allowed to access through my device ?',
                answer: ' sit in integre saperet aliquando. Et quis eros erroribus mea, mea liber neglegentur ex. Aliquam mediocrem an vix, an veniam nemore ornatus usu.'
            },
            {
                question: 'What credentials should I use to log-in into Appmart ?',
                answer: 'You’re Ultimatix Credentials.'
            }
        ];
    }

})();