// Licensed under the MIT License.
// Copyright 2015 Sukohi Kuhoh
// MODIFIED

;(function($) {

    $.fn.inlineEdit = function(event, options, callback) {

        if(typeof(options) == 'function') {

            callback = options;
            options = {};

        }

        if(options == undefined) {

            options = {};

        }

        var IE = {
            inputClass: 'inline-edit-input',
            statusName: 'inline-edit-status',
            show: function(target){

                if(!IE.isShowing(target)) {

                    IE.setStatus(target, 1);
                    var text = $(target).text();
                    $(target).data('original-text', text)
                        .html(IE.inputTag(text, options));
                    $('.artboard__subtitle__word-counter').show();
                    // Remove padding, so box does not "pop"
                    $('.inline-text-edit').css('padding', '0');

                     // Word counter
                    var maxLength = $('.inline-edit-input').attr('maxlength');
                    console.log(maxLength);

                    //$('.inline-edit-input').attr('maxength');
                    $('.inline-edit-input').keyup(function() {
                      var length = $(this).val().length;
                      var length = maxLength-length;
                      console.log(length);
                      $('#chars').text(length);
                    });


                    IE.inputChild(target)
                        .focus()
                        .val("") // Clear the text field
                        .on('blur keypress', function(e){

                            if(e.type == 'blur' || (e.type == 'keypress' && e.keyCode == 13)) {

                                IE.hide(e, target);
                                $('.artboard__subtitle__word-counter').hide();
                            }

                        });

                }

            },
            hide: function(e, target){

                if(IE.isShowing(target)) {

                    IE.setStatus(target, 0);
                    var text = IE.inputChild(target).val();
                    var originalText = $(target).data('original-text');

                    if(text == '') {

                        text = originalText;

                    }

                    $(target).text(text);

                    if(typeof(callback) == 'function') {

                        callback(text, originalText, $(target));

                    }
                    // Add shadow padding to text field on hide
                    $('.inline-text-edit').css('padding', '1px');


                }

            },
            inputChild: function(target){

                return $(target).find('.'+ IE.inputClass);

            },
            isShowing: function(target){

                return (IE.getStatus(target) == 1);

            },
            getStatus: function(target){

                return $(target).data(IE.statusName);

            },
            setStatus: function(target, status){

                $(target).data(IE.statusName, status);

            },
            inputTag: function(text, options){

                var type = options['type'];
                var attribute = '';
                var inputClass = IE.inputClass;

                if(typeof(options['attributes']) == 'object') {

                    $.each(options['attributes'], function(key, value){

                        if(key == 'class') {

                            inputClass += ' '+ value;

                        } else {

                            attribute += ' '+ key +'='+ value;

                        }

                    });

                }

                return '<textarea class="'+ inputClass +'" type="text"'+ attribute +' maxlength="50">'+ text +'</textarea>';
            }

        };

        $.each(this, function(key, target){

            $(target).data(IE.statusName, 0)
                .on(event, function(e){

                    IE.show(target);

                });

        });

    }

})(jQuery);
