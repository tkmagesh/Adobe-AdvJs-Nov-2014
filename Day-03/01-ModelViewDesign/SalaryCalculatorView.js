function SalaryCalculatorView(calculator){
            
            this.initialize = function(){
                var $root = this.$root = $("<div></div>");
                
                calculator.addChangeSubscriber('basic',function(){
                    $("#txtBasic",$root).val(calculator.get('basic'));
                });

                calculator.addChangeSubscriber('hra',function(){
                    $("#txtHra",$root).val(calculator.get('hra'));
                });

                calculator.addChangeSubscriber('da',function(){
                    $("#txtDa",$root).val(calculator.get('da'));
                });

                calculator.addChangeSubscriber('tax',function(){
                    $("#rangeTax",$root).val(calculator.get('tax'));
                     $("#spanTax",$root).html(calculator.get('tax')  + '%');
                });

                calculator.addChangeSubscriber('salary', function(){
                     $("#divResult",$root).html(calculator.get('salary'));
                });

                //View Changes
                $root.on("change","#txtBasic", function(){
                    calculator.set('basic',parseInt(this.value,10));
                });
                $root.on("change","#txtHra",function(){
                    calculator.set('hra', parseInt(this.value,10));
                });
                $root.on("change","#txtDa",function(){
                    calculator.set('da',parseInt(this.value,10));
                });
                $root.on("change","#rangeTax",function(){
                    calculator.set('tax', parseInt(this.value,10));
                });
                $root.on("click", "#btnCalculate", function(){
                    calculator.calculate();

                });

            }
            
            this.render = function(){
                this.$root.append($("#salaryCalculatorTemplate").html());
                return this;
            }
        }