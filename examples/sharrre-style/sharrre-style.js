(function ($) {
  'use strict';
  Drupal.behaviors.sharrre = {
    attach: function (context, settings) {
      var shphp = Drupal.settings.sharrre.shphp;
      var template;

      // html template, see examples/README.md
      if ($('#sharrre-html-template').length) {
        template = $('#sharrre-html-template').html();
        $('#sharrre-html-template').remove();
      }

      $('.sharrre-icons').each(function (i, obj) {
        $(this).sharrre({
          share: {
            twitter: true,
            facebook: true,
            googlePlus: true
          },
          urlCurl: shphp,
          // you can write html template here or set
          // $variables['social_sharrre_icons']['html_template']['html']['#markup'] = [your_html_code]
          // in theme_node_preprocess
          template: template,
          enableHover: false,
          render: function (api, options) {
            $(api.element).on('click', '.twitter', function () {
              api.openPopup('twitter');
            });
            $(api.element).on('click', '.facebook', function () {
              api.openPopup('facebook');
            });
            $(api.element).on('click', '.googleplus', function () {
              api.openPopup('googlePlus');
            });
          }
        });
      });
    }
  };
})(jQuery);
