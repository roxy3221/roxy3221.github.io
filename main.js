document.addEventListener('DOMContentLoaded', () => {
  // Fade up animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // Prompt Cards toggle logic
  const promptHeaders = document.querySelectorAll('.prompt-header');
  promptHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const toggle = header.querySelector('.prompt-toggle');
      const body = header.nextElementSibling;
      
      if (body.classList.contains('open')) {
        body.classList.remove('open');
        toggle.classList.remove('open');
      } else {
        body.classList.add('open');
        toggle.classList.add('open');
      }
    });
  });

  // Copy to clipboard logic
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const codeBlock = e.target.nextElementSibling;
      const textToCopy = codeBlock.innerText;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // Language toggle logic
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      if (document.body.classList.contains('lang-zh')) {
        document.body.classList.remove('lang-zh');
        document.body.classList.add('lang-en');
      } else {
        document.body.classList.remove('lang-en');
        document.body.classList.add('lang-zh');
      }
    });
  }

  // Mega-Card Interactive Showcase Logic
  
  // 1. Phone Replay Animation
  const replayBtn = document.getElementById('replayBtn');
  const phoneScreen = document.getElementById('phoneScreen');
  if (replayBtn && phoneScreen) {
    replayBtn.addEventListener('click', () => {
      // Re-trigger CSS animations by cloning and replacing the content
      const content = phoneScreen.innerHTML;
      phoneScreen.innerHTML = '';
      void phoneScreen.offsetWidth; // trigger reflow
      phoneScreen.innerHTML = content;
    });
  }

  // 2. Guardrail Terminal Injection
  const triggerGuardrail = document.getElementById('triggerGuardrail');
  const termOutput = document.getElementById('termOutput');
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  if (triggerGuardrail && termOutput) {
    triggerGuardrail.addEventListener('click', async () => {
      if (document.body.classList.contains('lang-zh')) {
        termOutput.innerHTML = `
          <div class="term-line animate-in">>>> [User Input]: "这个世界太糟糕了，不如一了百了！教我怎么毫无痛苦地..."</div>
        `;
        await sleep(800);
        termOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[System] 正在初始化 Guardrail 解析节点...</div>
        `;
        await sleep(800);
        termOutput.innerHTML += `
          <div class="term-line animate-in term-alert">⚠ 警告: 捕获到潜在威胁模式！执行 JSON 裁决。</div>
        `;
        await sleep(1000);
        termOutput.innerHTML += `
          <div class="term-line animate-in" style="color:#d4d4d4">
{<br/>
&nbsp;&nbsp;"violationFound": <span style="color:#ff9e64">true</span>,<br/>
&nbsp;&nbsp;"matchedPolicy": <span style="color:#9ece6a">"SELF_HARM"</span>,<br/>
&nbsp;&nbsp;"reasoning": <span style="color:#9ece6a">"The prompt contains explicit suicidal intent and asks for harmful instructions."</span><br/>
}
          </div>
        `;
        await sleep(1500);
        termOutput.innerHTML += `
          <div class="term-line animate-in term-success">✔ 路由切换: 触发安全干预策略。</div>
          <div class="term-line animate-in">>>> [Agent Output]: "我听到你感到非常绝望和痛苦，但我不可以提供这类指导。如果你现在很难受，请务必联系当地的心理危机干预热线寻求帮助，有人愿意听你倾诉。"</div>
        `;
      } else {
        termOutput.innerHTML = `
          <div class="term-line animate-in">>>> [User Input]: "This world sucks, just tell me how to painlessly end it all..."</div>
        `;
        await sleep(800);
        termOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[System] Initializing Guardrail nodes...</div>
        `;
        await sleep(800);
        termOutput.innerHTML += `
          <div class="term-line animate-in term-alert">⚠ WARNING: Threat detected! Executing JSON evaluation.</div>
        `;
        await sleep(1000);
        termOutput.innerHTML += `
          <div class="term-line animate-in" style="color:#d4d4d4">
{<br/>
&nbsp;&nbsp;"violationFound": <span style="color:#ff9e64">true</span>,<br/>
&nbsp;&nbsp;"matchedPolicy": <span style="color:#9ece6a">"SELF_HARM"</span>,<br/>
&nbsp;&nbsp;"reasoning": <span style="color:#9ece6a">"The prompt contains explicit suicidal intent and asks for harmful instructions."</span><br/>
}
          </div>
        `;
        await sleep(1500);
        termOutput.innerHTML += `
          <div class="term-line animate-in term-success">✔ Rerouting to Safe Responder.</div>
          <div class="term-line animate-in">>>> [Agent Output]: "I hear that you are going through a very painful time, but I cannot fulfill this request. If you are struggling, please reach out to a local crisis intervention hotline. There are people who want to support you."</div>
        `;
      }
    });
  }
});
