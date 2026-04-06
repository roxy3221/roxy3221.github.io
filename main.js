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

  // 3. RAG Phone Replay Animation (Simulating Chat)
  const replayRagBtn = document.getElementById('replayRagBtn');
  const ragChatScreen = document.getElementById('ragChatScreen');
  
  if (replayRagBtn && ragChatScreen) {
    const renderRagChat = () => {
      ragChatScreen.innerHTML = `
        <div class="chat-bubble user animate-in">
          <span class="zh">用户疑似账户被盗怎么处理？</span>
          <span class="en">How should we handle a suspected compromised account?</span>
        </div>
        <div class="chat-bubble pudding animate-in" style="animation-delay: 1s;">
          <span class="zh">正在检索知识库...</span>
          <span class="en">Retrieving Knowledge Base...</span>
        </div>
        <div class="chat-bubble pudding animate-in" style="animation-delay: 3s; border: 1px solid #00B96B;">
          <div style="margin-bottom: 8px;">
            <span class="zh">根据最近的账号安全规范，应立即执行以下操作：</span>
            <span class="en">According to the latest account security policy, follow these steps immediately:</span>
          </div>
          <ol style="margin: 0; padding-left: 16px; font-size: 13px;">
            <li><span class="zh">立刻冻结该账户的出金及高危操作权限。</span><span class="en">Freeze outbound transfers and high-risk actions.</span></li>
            <li><span class="zh">引导用户进入人脸/实名身份验证找回流程。</span><span class="en">Guide the user to the facial/ID verification recovery process.</span></li>
            <li><span class="zh">对于异常登录的设备 IP 自动加入观察名单。</span><span class="en">Add the anomalous login IP to the watchlist automatically.</span></li>
          </ol>
          <div class="rag-source-chip">📑 飞书文档: 账号安全干预 SOP v2.0</div>
        </div>
      `;
    };
    
    // Initial Render
    renderRagChat();

    replayRagBtn.addEventListener('click', () => {
      ragChatScreen.innerHTML = '';
      void ragChatScreen.offsetWidth; // trigger reflow
      renderRagChat();
    });
  }

  // 4. RAG Vector Terminal Injection
  const triggerRAG = document.getElementById('triggerRAG');
  const ragTermOutput = document.getElementById('ragTermOutput');

  if (triggerRAG && ragTermOutput) {
    triggerRAG.addEventListener('click', async () => {
      if (document.body.classList.contains('lang-zh')) {
        ragTermOutput.innerHTML = `
          <div class="term-line animate-in">>>> [Query]: "用户疑似账户被盗怎么处理？"</div>
        `;
        await sleep(600);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[System] 正在调用 text-embedding-ada-002 提取语义特征...</div>
        `;
        await sleep(800);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[Vector DB] 执行余弦相似度检索 (Top-K = 2)</div>
        `;
        await sleep(1000);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:#d4d4d4">
            [检索命中 1]<br/>
            &nbsp;&nbsp;Doc_ID: <span style="color:#9ece6a">"lark_sop_account_security"</span><br/>
            &nbsp;&nbsp;Similarity: <span style="color:#ff9e64">0.942</span><br/>
            &nbsp;&nbsp;Snippet: "当用户申诉账户被盗时，安全客服需第一..."
          </div>
        `;
        await sleep(800);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in term-success">✔ 上下文组装完成 (Context length: 1,842 tokens)</div>
        `;
        await sleep(600);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in">>>> [LLM Generation]: "根据账号安全干预 SOP v2.0，首先应立即冻结该账户..."</div>
        `;
      } else {
        ragTermOutput.innerHTML = `
          <div class="term-line animate-in">>>> [Query]: "How should we handle a suspected compromised account?"</div>
        `;
        await sleep(600);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[System] Generating embeddings via text-embedding-ada-002...</div>
        `;
        await sleep(800);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:var(--muted);">[Vector DB] Performing Cosine Similarity Search (Top-K = 2)</div>
        `;
        await sleep(1000);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in" style="color:#d4d4d4">
            [Match 1]<br/>
            &nbsp;&nbsp;Doc_ID: <span style="color:#9ece6a">"lark_sop_account_security"</span><br/>
            &nbsp;&nbsp;Similarity: <span style="color:#ff9e64">0.942</span><br/>
            &nbsp;&nbsp;Snippet: "When a user appeals account compromise, support must..."
          </div>
        `;
        await sleep(800);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in term-success">✔ Context successfully injected (Length: 1,842 tokens)</div>
        `;
        await sleep(600);
        ragTermOutput.innerHTML += `
          <div class="term-line animate-in">>>> [LLM Generation]: "According to the Account Security SOP v2.0, first freeze..."</div>
        `;
      }
    });
  }
});
