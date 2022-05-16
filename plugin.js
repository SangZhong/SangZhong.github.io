$(document).ready(function(){
    $("textarea").keyup(function() {
        
        var characterCount = $(this).val().length,
            current = $("#current"),
            maximum = $("#maximum"),
            theCount = $("#the-count");
        
        current.text(characterCount);
    
        
        /*This isn't entirely necessary, just playin around*/
        // if (characterCount < 70) {
        //   current.css('color', '#666');
        // }
        // if (characterCount > 70 && characterCount < 90) {
        //   current.css('color', '#6d5555');
        // }
        // if (characterCount > 90 && characterCount < 100) {
        //   current.css('color', '#793535');
        // }
        // if (characterCount > 100 && characterCount < 120) {
        //   current.css('color', '#841c1c');
        // }
        // if (characterCount > 120 && characterCount < 139) {
        //   current.css('color', '#8f0001');
        // }
        
        // if (characterCount >= 140) {
        //   maximum.css('color', '#8f0001');
        //   current.css('color', '#8f0001');
        //   theCount.css('font-weight','bold');
        // } else {
        //   maximum.css('color','#666');
        //   theCount.css('font-weight','normal');
        // }
        
            
    });

    $(".addParamBtn").click(function() {
        console.log("pass");
        // AddRuleDiv();
        document.getElementById("ruleDiv").insertAdjacentHTML("beforeend", paramBlock);
        // this.manageAddMinusBtn();
        LoopAddParamBtn();
    });

    //LoopAddParamBtn();
    //LoopAddRuleBtn();

    $(".addRuleBtn").click(function() {
        console.log("add rule button pass" );
        document.getElementById("allRulesDiv").insertAdjacentHTML("beforeend", ruleBlock);
        LoopAddRuleBtn();
    })

});

var paramBlock = `
<div style="display: inline">
    <input type="text" id="parameter" name="parameter" placeholder="Enter parameter" style="width: 30%;"/>
    <button type="button" class="button-svg addParamBtn">
    <img src="./Instructions/add_circle_outline.svg"/>
    </button>
    <br/>
</div>
`;

var ruleBlock = `
<div id="rule" class="container-inner container-border container-border-dotted">
    <p>Rule 1</p>
    <div class="container-grey">
        <div id="ruleDiv">
            <div>
                If 
                <select id="field" name="field" style="width: 20%;" placeholder="Select field">
                    <option value="afff_sub_1">afff_sub_1</option>
                    <option value="afff_sub_2">afff_sub_2</option>
                    <option value="afff_sub_3">afff_sub_3</option>
                    <option value="afff_sub_4">afff_sub_4</option>
                </select>
                <select id="operator" name="operator" style="width: 20%;" placeholder="Select operator">
                    <option value="is_not">is not</option>
                    <option value="is">is</option>
                    <option value="starts_with">starts with</option>
                    <option value="ends_with">ends with</option>
                    <option value="contains">contains</option>
                    <option value="does_not_contain">doesn't contain</option>
                </select>
                ` + paramBlock + `
            </div>
        </div>
    </div>
    <p>
        then revenue is 
        <input type="text" id="revenue" name="revenue" placeholder="Enter amount"/>
    </p>
</div>

`;

var index = 0;

function AddRuleDiv(index) {
    if (index == undefined) {
        index = "0";
    }
    console.log("11111");
    // ruleBlock = ruleBlock.replace("rule", "rule" + index);
    document.getElementById("allRulesDiv").insertAdjacentHTML("afterend", ruleBlock);
    // this.manageAddMinusBtn();
}

function LoopAddRuleBtn() {
    console.log("sss");
    var allAddRuleButtons = document.querySelectorAll("[class*=addRuleBtn]");
    console.log("Found", allAddRuleButtons.length, "div which class starts with “button”.");
    for (var i = 0; i < allAddRuleButtons.length; i++) {
        allAddRuleButtons[i].addEventListener("click", function() {
            AddRuleDiv(i.toString());
        });
    }
    LoopAddParamBtn();
}

function AddParamDiv() {
    console.log("pass lower");
    document.getElementById("ruleDiv").insertAdjacentHTML("beforeend", paramBlock);
    LoopAddParamBtn();
}

function LoopAddParamBtn() {
    var allAddParamButtons = document.querySelectorAll("[class*=addParamBtn]");
    console.log("Found", allAddParamButtons.length, "div which class starts with “button”.");

    for (var i = 0; i < allAddParamButtons.length; i++) {
        allAddParamButtons[i].addEventListener("click", function() {
            AddParamDiv(2);
        });
    }
}

function manageAddMinusBtn() {
    if ( $(this).is($(".addParamBtn:last")) ) 
    {
    // I'm the last check element!
    console.log("last checked");
    }  
}